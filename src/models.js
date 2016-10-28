import Realm from 'realm';

const cardCreditSchema = {
	name  : 'Card',
	primaryKey: 'id',
	properties : {
		id	 : 'int',
		name : { type : 'string', indexed : true },
		tax  : { type : 'int', default: 0},
		cupo : { type : 'int', default: 0}, // Asi?
		type : 'string',
	}
};

const userPhoneSchema = {
	name  : 'userPhone',
	primaryKey: 'id',
	properties : {
		id	  : 'int',
		name  : 'string',
		email : { type: 'string', optional: true},
		token : 'string'
	}
};

const realm = new Realm({schema: [userPhoneSchema, cardCreditSchema]});

const DB = {
	add: (model, data) => {
		realm.write(() => {
		  realm.create(model, data);
		});
	},
	update: (model, data) => {
		realm.write(() => {
		  realm.create(model, data, true);
		});
	},
	clean: (model) => {
		realm.write(() => {
			let _modelDelete = realm.objects(model);
  		realm.delete(_modelDelete);
		})
	},
	list: (model, sort) => {
		if (sort)
			return realm.objects(model).sorted(sort);
		else
			return realm.objects(model);
	},
	search: (model, query, sort) => {
		if (sort)
			return realm.objects(model).filtered(query).sorted(sort);
		else
			return realm.objects(model).filtered(query).sorted(sort);
	}
};

export default DB;
