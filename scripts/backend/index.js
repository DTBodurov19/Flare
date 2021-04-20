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
  constructor(id, name, role) {
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

    fireEvent.state = FireEventsManager.fireStates.pending;

    return fireEvent;
  }
}