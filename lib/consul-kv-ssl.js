var q = require('q');

function CertificateStore(config) {
    this.consul = require('consul')(config);
}

CertificateStore.prototype.Load(serviceName) {
    var deferred = Q.defer();
    this.consul.kv.get('certificates/' + serviceName + '/cert.pem', function(error, values)) {
        if (!error) {
            q.resolve(value);
        } else {
            q.reject(error);
        }
    }
    return q.promise;
}

CertificateStore.prototype.Store(serviceName) {
    var deferred = Q.defer();
    this.consul.kv.set('certificates/' + serviceName + '/cert.pem', function(error, values)) {
        if (!error) {
            q.resolve();
        } else {
            q.reject(error);
        }
    }
    return q.promise;
}

module.export = CertificateStore;
