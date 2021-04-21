/**
 * A class for managing all of the accounts
 */
class AccountManager {
  _accounts = [
    {
      permissions: "FireFighter",
      username: "Firefighter",
      password: "123456",
    },
    {
      permissions: "Driver",
      username: "Driver",
      password: "123456",
    },
    {
      permissions: "Dispatcher",
      username: 'Dispatcher',
      password: '1234567',
    },
  ];
  
  _activeUser;

  get activeUser () {
    return {
      permissions: this._activeUser.permissions,
      username: this._activeUser.username,
    };
  }

  /**
   * On success sets the updates the activeUser property and returns it.
   * @param {string} Username to login with 
   * @param {string} Password to login with
   * @returns {string} activeUser
   */
  login (username, password) {
    let result = this._accounts.filter(account => account.username === username && account.password === password)[0];
    if (result === undefined) throw new Error('Incorrect username or password.');

    this._activeUser = result;

    return this.activeUser;
  }
}

/**
 * A class representing a FireTruck.
 */
class FireTruck {
  _isAvailable = true;

  /**
   * Create a FireTruck.
   * @param {string} licencePlate 
   * @param {string} make 
   * @param {string} model 
   * @param {number} kmTraveled 
   * @param {number} waterStorage 
   */
  constructor (licencePlate, make, model, kmTraveled, waterStorage) {
    // implement regex check for licencePlate ex.: A 4056 AB

    this.licencePlate = licencePlate;
    this.make = make;
    this.model = model;
    this.kmTraveled = kmTraveled;
    this.waterStorage = waterStorage;
  }

  get isAvailable () {
    return this._isAvailable;
  }

  /**
   * Changes the availability of the FireTruck.
   * @param {boolean} toAvailable 
   * @returns {number} The set value.
   */
   changeAvailability (toAvailable) {
    if (this.isAvailable === toAvailable) throw new Error(`The fireTrucks availability is already\
 set to: ${this.isAvailable}.`);
    
    this._isAvailable = toAvailable;

    return this.isAvailable;
  }
}

/**
 * Class representing a manager for the FireTrucks.
 */
class FireTruckManager {
  _fireTrucks = [];

  get fireTrucks() {
    return this._fireTrucks;  
  }

  /**
   * Adds a new FireTruck instance to the list of fireTrucks.
   * @param {FireTruck} fireTruck 
   * @returns {FireTruck} The added fireTruck.
   */
  addNewFireTruck (fireTruck) {
    if (!(fireTruck instanceof FireTruck)) throw new Error('FireTruck must be instance of FireTruck class.');

    for (const cfireTruck of this._fireTrucks) {
      if (cfireTruck.licencePlate === fireTruck.licencePlate) throw new Error(`There is already a FireTruck\
 with the licence plate ${fireTruck.licencePlate}`);
    }

    this._fireTrucks.push(fireTruck);

    return fireTruck;
  }

  /**
   * Returns a FireTruck with the specified licence plate.
   * @param {string} licencePlate 
   * @returns {FireTruck} The FireTruck found.
   */
  getFireTruckByLicencePlate (licencePlate) {
    if (typeof licencePlate !== 'string') throw new Error('Id must be a String.');

    let fireTruck = this._fireTrucks.filter((fireTruck) => fireTruck.licencePlate === licencePlate)[0];

    if (!(fireTruck instanceof FireTruck)) throw new Error('Could not find FireTruck with the specified licence plate.');

    return fireTruck;
  }
}

/**
 * Class representing a FireWorker.
 */
class FireWorker {
  _isAvailable = true;

  /**
   * 
   * @param {number} id - The id you are going to use to acces the FireWorker.
   * @param {string} name - The name of the FireWorker.
   * @param {string} role - The job of the FireWorker.
   */
  constructor (id, name, role) {
    if (typeof id !== 'number') throw new Error('Id must be Number.');
    if (typeof name !== 'string') throw new Error('Name must be String.');
    if (typeof role !== 'string') throw new Error('Role must be String.');

   this.id = id;
   this.name = name;
   this.role = role;
  }

  get isAvailable () {
    return this._isAvailable;
  }

  /**
   * Changes the availability of the FireWorker.
   * @param {boolean} toAvailable 
   * @returns {number} The set value.
   */
  changeAvailability(toAvailable) {
    if (this.isAvailable === toAvailable) throw new Error(`The workers availability is already\
 set to: ${this.isAvailable}.`);
    
    this._isAvailable = toAvailable;

    return this.isAvailable;
  }
}

/**
 * Class representing a manager for the FireWorkers.
 */
class WorkerManager {
  _workers = [];

  get workers () {
    return this._workers;
  }

  /**
   * Adds a new FireWorker instance to the workers array.
   * @param {FireWorker} FireWorker - Provide an instance of the class FireWorker.
   */
  addNewWorker (worker) {
    if (!(worker instanceof FireWorker)) throw new Error('Worker must be instance of the FireWorker class.');

    this._workers.forEach(arrWorker => {
      if (arrWorker.id === worker.id) throw new Error(`There is already a worker with the id: ${worker.id}.`);
    });

    this._workers.push(worker);

    return worker;
  }

  /**
   * Returns an array containing all of the workers with the specified role.
   * @param {string} role - The role to search with. 
   * @returns {Worker[]} All of the workers with the corresponding role.
   */
  getAllWorkersByRole (role) {
    if (typeof role !== 'string') throw new Error('Role must be a String.');

    return this._workers.filter(worker => worker.role === role);
  }

  /**
   * Returns a worker with the specified ID.
   * @param {number} id - The id of the user you want to get.
   */
  getWorkerByID (id) {
    if (typeof id !== 'number') throw new Error('Id must be a Number.');

    let worker = this._workers.filter((worker) => worker.id === id)[0];

    if (!(worker instanceof FireWorker)) throw new Error(`Could not find worker with id ${id}.`);

    return worker;
  }
}

/**
 * A class representing a manager for all of the FireEvents.
 */
class FireEventsManager {
  _fireEvents = [];
  _currentFireEventID = 1;


  static fireSizes = {
    smallFire: 0,
    mediumFire: 1,
    largeFire: 2,
  };

  static fireStates = {
    unverified: 'unverified',
    pending: 'pending',
    inProgress: 'inProgress',
    finished: 'finished',
  };

  /**
   * A function to submit a new FireEvent.
   * @param {number} fireSize The size of the fire
   * @param {Date} startDate The Date of submittion (should be an instance of the Date class).
   * @param {[lat:string, long:string]} coords coordinates of the fire.
   * @param {string} description of the fire.
   * @param {string} telephoneNumber of the reporter.
   * @param {string} reporterName of the reporter.
   * @returns {object} Returns the generated FireEvent.
   */
  addNewFireEvent (fireSize, startDate, coords, description, telephoneNumber, reporterName) {
    if (typeof fireSize !== 'number') throw new Error(`Invalid type of fireSize, should be Number,\
 but is ${typeof fireSize} instead.`);
    if (!(startDate instanceof Date)) throw new Error('Invalid type of startDate, should be instance of Date.');
    if (typeof description !== 'string') throw new Error(`Invalid type of description, should be String,\
 but is ${typeof description} instead.`);
    if (typeof telephoneNumber !== 'string') throw new Error(`Invalid type of telephoneNumber, should be String,\
 but is ${typeof telephoneNumber} instead.`);
    if (typeof reporterName !== 'string') throw new Error(`Invalid type of reporterName, should be String,\
 but is ${typeof reporterName} instead.`);

    let newFireEvent = {
      ID: this._currentFireEventID,
      state: 'unverified',
      fireSize,
      startDate,
      lat: coords[0],
      long: coords[1],
      description,
      telephoneNumber,
      reporterName,
    };

    this._currentFireEventID++;

    this._fireEvents.push(newFireEvent);

    return newFireEvent;
  }

  get fireEvents () {
    return this._fireEvents;
  }

  /**
   * Returns an array of all the fires that match the state u provided.
   * @param {string} state 
   * @returns {object[]} An array of all the matching FireEvents.
   */
  getFireEventsByState (state) {
    if (typeof state !== 'string') throw new Error('Invalid type of state, should be String.');
    if (!(state in FireEventsManager.fireStates)) throw new Error('Invalid state.');

    return this._fireEvents.filter(fireEvent => fireEvent.state === state);
  }

  /**
   * Returns the FireEvent with the specified id.
   * @param {number} id The id of the FireEvent you want to get. 
   * @returns {object} The fire event corresponding to your id.
   */
  getFireEventByID (id) {
    if (typeof id !== 'number') throw new Error('Id must be a Number.');

    const fireEvent = this._fireEvents.filter(fireEvent => fireEvent.ID === id)[0];

    if (fireEvent === undefined) throw new Error(`Couldn't find fireEvent with the id ${id}`);

    return fireEvent;
  }

  /**
   * Validates the FireEvent with the given id.
   * @param {number} id The id of the FireEvent you want to validate.
   * @returns {object} The affected FireEvent.
   */
  validateFireEvent (id) {
    const fireEvent = this.getFireEventByID(id);

    if (fireEvent.state !== FireEventsManager.fireStates.unverified) throw new Error('Invalid FireEvent');

    fireEvent.state = FireEventsManager.fireStates.pending;

    return fireEvent;
  }

  /**
   * Engages operation on the specified FireEvent if it is eligible for that.
   * @param {number} id The id of the FireEvent you want target.
   * @param {Date} startOperationTime The time of start.
   * @param {FireWorker} driver
   * @param {FireWorker} fireFighter1
   * @param {FireWorker} fireFighter2
   * @param {FireTruck} fireTruck
   * @returns {object} The fire event that was edited.
   */
  startOperationOnFireEvent (id, startOperationTime, driver, fireFighter1, fireFighter2, fireTruck) {
    const fireEvent = this.getFireEventByID(id);
    const workers = [driver, fireFighter1, fireFighter2];

    if (fireEvent.state !== FireEventsManager.fireStates.pending) throw new Error('Invalid FireEvent');

    if (!(startOperationTime instanceof Date)) throw new Error('StartOperationTime must be instance of Date class.');
    if (!(driver instanceof FireWorker)) throw new Error('Driver must be instance of FireWorker class.');
    if (!(fireFighter1 instanceof FireWorker)) throw new Error('FireFighter1 must be instance of FireWorker class.');
    if (!(fireFighter2 instanceof FireWorker)) throw new Error('FireFighter2 must be instance of FireWorker class.');
    if (!(fireTruck instanceof FireTruck)) throw new Error('FireTruck must be instance of FireTruck class.');

    fireEvent.startOperationTime = startOperationTime;
    fireEvent.state = FireEventsManager.fireStates.inProgress;

    for (const worker of workers) {
      worker.changeAvailability(false);
    }

    fireTruck.changeAvailability(false);

    fireEvent.driver = driver;
    fireEvent.fireFighter1 = fireFighter1;
    fireEvent.fireFighter2 = fireFighter2;
    fireEvent.fireTruck = fireTruck;

    return fireEvent;
  }

  /**
   * The final function in state-changing functions for the FireEvents. Makes copies of the workers by VALUE.
   * @param {number} id 
   * @param {Date} finishTime 
   * @param {number} newkmTraveled
   * @returns {object} The finished FireEvent.
   */
  finishOperationOnFireEvent (id, finishTime, newkmTraveled) {
    const fireEvent = this.getFireEventByID(id);
    const driver = fireEvent.driver;
    const fireFighter1 = fireEvent.fireFighter1;
    const fireFighter2 = fireEvent.fireFighter2;
    const workers = [driver, fireFighter1, fireFighter2];
    const fireTruck = fireEvent.fireTruck;

    if (fireEvent.state !== FireEventsManager.fireStates.inProgress) throw new Error('Invalid FireEvent');
    if (!(finishTime instanceof Date)) throw new Error('StartOperationTime must be instance of Date class.');

    fireEvent.state = FireEventsManager.fireStates.finished;
    fireEvent.finishTime = finishTime;
    fireTruck.kmTraveled = newkmTraveled;

    fireEvent.driver = new FireWorker(driver.id, driver.name, driver.role);
    fireEvent.fireFighter1 = new FireWorker(fireFighter1.id, fireFighter1.name, fireFighter1.name);
    fireEvent.fireFighter2 = new FireWorker(fireFighter2.id, fireFighter2.name, fireFighter2.name);
    fireEvent.fireTruck = new FireTruck(
        fireTruck.licencePlate,
        fireTruck.make,
        fireTruck.model,
        fireTruck.kmTraveled,
        fireTruck.waterStorage);

    delete fireEvent.driver._isAvailable;
    delete fireEvent.fireFighter1._isAvailable;
    delete fireEvent.fireFighter2._isAvailable;
    delete fireEvent.fireTruck._isAvailable;

    for (const worker of workers) {
      worker.changeAvailability(true);
    }
    fireTruck.changeAvailability(true);

    return fireEvent;
  }
}