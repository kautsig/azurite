'use strict';

const AError = require('./../../core/AzuriteError'),
    ErrorCodes = require('./../../core/ErrorCodes');

/*
 * Checks whether the blob has been committed yet as part of PUT BlockList.
 * Although a BlockBlob is created when the first block has been created it is not visible for operations
 * such as GET Blob.
 */
class BlobCommitted {
    constructor() {
    }

    validate({ blobProxy = undefined }) {
        if (blobProxy === undefined) {
            throw new AError(ErrorCodes.BlobNotFound);
        }

        if (!blobProxy.original.committed) {
            throw new AError(ErrorCodes.BlobNotFound);
        }
    }
}

module.exports = new BlobCommitted();