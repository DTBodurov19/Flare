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

  constructor() {}

  get activeUser() {
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
    if (result === undefined) throw new Error('Incorrect username or password');

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
    if (typeof id !== 'number') throw new Error('id must be Number');
    if (typeof name !== 'string') throw new Error('name must be String');
    if (typeof role !== 'string') throw new Error('role must be String');

   this.id = id;
   this.name = name;
   this.role = role;
  }

  get isAvailable() {
    return this._isAvailable;
  }

  /**
   * Changes the availability of the FireWorker.
   * @param {boolean} toAvailable 
   */
  changeAvailability(toAvailable) {
    if (this.isAvailable === toAvailable) throw new Error(`The workers availability is already set to: ${this.isAvailable}`);
    
    this._isAvailable = toAvailable;

    return this.isAvailable;
  }
}

/**
 * Class representing a manager for the FireWorkers.
 */
class WorkerManager {
  _workers = [];

  get workers() {
    return this._workers;
  }

  /**
   * Adds a new FireWorker instance to the workers array.
   * @param {FireWorker} FireWorker - Provide an instance of the class FireWorker.
   */
  addNewWorker(worker) {
    if (!(worker instanceof FireWorker)) throw new Error('worker must be instance of the FireWorker class');

    this._workers.forEach(arrWorker => {
      if (arrWorker.id === worker.id) throw new Error(`There is already a worker with the id: ${worker.id}`);
    });

    this._workers.push(worker);

    return worker;
  }


  /**
   * Returns an array containing all of the workers with the specified role.
   * @param {string} role - The role to search with. 
   * @returns {Worker[]} All of the workers with the corresponding role.
   */
  getAllWorkersByRole(role) {
    if (typeof role !== 'string') throw new Error('role must be a String');

    return this._workers.filter(worker => worker.role === role);
  }

  /**
   * Returns a worker with the specified ID.
   * @param {number} id - The id of the user you want to get.
   */
  getWorkerByID(id) {
    if (typeof id !== 'number') throw new Error('id must be a Number');

    let worker = this._workers.filter((worker) => worker.id === id)[0];

    if (!(worker instanceof FireWorker)) throw new Error(`Could not find worker with id ${id}`);

    return worker;
  }
}