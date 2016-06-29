var q = require('q');

function CertificateStore(options) {
    if (options === undefined) {
        this.consul = require('consul')();
    } else {
        this.consul = require('consul')(options);
    }
}

CertificateStore.prototype.load = function(serviceName) {
    var deferred = Q.defer();
    this.consul.kv.get('certificates/' + serviceName + '/cert.pem', function(error, values) {
        if (!error) {
            q.resolve(value);
        } else {
            q.reject(error);
        }
    });
    return q.promise;
}

CertificateStore.prototype.store = function(serviceName, certificate) {
    var deferred = Q.defer();
    this.consul.kv.set('certificates/' + serviceName + '/cert.pem', certificate, function(error, values) {
        if (!error) {
            q.resolve();
        } else {
            q.reject(error);
        }
    });
    return q.promise;
}

module.exports = CertificateStore;
