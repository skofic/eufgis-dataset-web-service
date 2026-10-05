'use strict'
/**
 * Global definitions and constants.
 */

///
// Document collections.
///
const documentCollections = {
	"kDatasetCollectionName": {
		name: module.context.configuration.kDatasetCollectionName,
		indexwa: {
			"kDatasetCollectionName": {
				"idx_dataset": {
					"fields": [
						"datasetId"
					],
					"unique": true
				}
			}
		}
	}
}

///
// Edge collections.
///
const edgeCollections = {
}

///
// Views.
///
const views = {
}

///
// Exports.
///
module.exports = {
	documentCollections,
	edgeCollections,
	views
}
