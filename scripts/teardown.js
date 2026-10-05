'use strict';
/**
 * Drop collections.
 */

///
// Includes.
///
const { db } = require('@arangodb');
const { context } = require('@arangodb/locals');
const {documentCollections, edgeCollections, views} = require('../globals')

for (const localName of collections) {
  const qualifiedName = context.collectionName(localName);
  db._drop(qualifiedName);
}
