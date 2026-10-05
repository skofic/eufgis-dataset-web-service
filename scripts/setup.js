'use strict'
/**
 * Create collections, views and indexes.
 */

///
// Includes.
///
const { db } = require('@arangodb');
const { context } = require('@arangodb/locals');
const {documentCollections, edgeCollections, views} = require('../globals')

///
// Handle document collections.
///
for (const [key, collection] of Object.entries(documentCollections)) {
  let collectionReference = db._collection(collection.name)
  if(!collectionReference) {
    collectionReference = db._createDocumentCollection(collection.name)
    console.debug(`Document collection ${collection.name} created.`)
  } else {
    console.debug(`Document collection ${collection.name} already exists.`)
  }
}

///
// Handle edge collections.
///
for (const [key, collection] of Object.entries(edgeCollections)) {
  let collectionReference = db._collection(collection.name)
  if(!collectionReference) {
    collectionReference = db._createEdgeCollection(collection.name)
    console.debug(`Edge collection ${collection.name} created.`)
  } else {
    console.debug(`Edge collection ${collection.name} already exists.`)
  }
}

///
// Handle analysers.
///

///
// Handle indexes.
///

///
// Handle document collection indexes.
///

/// Handle edge collection indexes.
///
