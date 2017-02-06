import Realm from 'realm';

/**
 * This is a basic schema
 * for a basic job
 * List cards and his current balance
 */

const cardSchema = {
	name: 'Card',
	properties: {
		number: 'int',
		balance: { type: 'double' }
	}
};

const purchaseSchema = {
	name: 'Purchase',
	properties: {
		purchaseValue: 'double',
		card: { type: 'Card' },
		date: 'date'
	}
};

const realm = new Realm({ 
	schema: [cardSchema, purchaseSchema],
	schemaVersion: 1,
	migration: (oldRealm, newRealm) => {
		const oldObjects = oldRealm.objects('Card');
    const newObjects = newRealm.objects('Card');
	}
});

// Almost CRUD (only with create and read)
const CR = {

		create: (model, data) =>	{
			/**
			 * Depends of the model
			 * where we're gonna
			 * save the data
			 */
			if (model === 'Card') {
				realm.write( () => {
					realm.create('Card', {
						number: data.number,
						balance: data.balance
					});
				});
			} else if (model === 'Purchase') {
				real.write(() => {
					realm.create('Purchase', {
						purchaseValue: data.purchaseValue,
						card: data.card,
						date: new Date(),
						type: null
					});
				});
			}
		},
		/**
		 * Let's read our data!
		 */
		read: (model) => {
			return realm.objects(model);
		}
};

export default CR;