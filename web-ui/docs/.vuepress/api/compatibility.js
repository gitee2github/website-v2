/**
 * @file  兼容性页面及详情接口配置文件
 * */

import appAjax from '../libs/ajax-utils';
const cveApi = '-cve';

// 1. 硬件列表
export const hardwareList = ({
    keyword,
    os,
    architecture,
    page,
    pageSize,
    lang
}) => {
    return new Promise((resolve, reject) => {
        appAjax.postJson({
            otherBaseUrl: cveApi,
            url: '/cve-security-notice-server/hardwarecomp/findAll',
            type: 'post',
            data: {
                keyword,
                os: os === 'all' ? '' : os,
                architecture: architecture === 'all' ? '' : architecture,
                pages: {
                    page,
                    size: pageSize
                },
                lang
            },
            success(result) {
                let res = {
                    totalRecords: result.result.totalCount,
                    list: result.result.hardwareCompList
                }
                if (result) {
                    resolve(res);
                    return;
                }
                reject(result);
            },
            error(msg) {
                reject(msg);
            }

        });

    });
}

// 2. 驱动列表
export const driverList = ({
    keyword,
    os,
    architecture,
    page,
    pageSize,
    lang
}) => {
    return new Promise((resolve, reject) => {
        appAjax.postJson({
            otherBaseUrl: cveApi,
            url: '/cve-security-notice-server/drivercomp/findAll',
            type: 'post',
            data: {
                keyword,
                os: os === 'all' ? '' : os,
                architecture: architecture === 'all' ? '' : architecture,
                pages: {
                    page,
                    size: pageSize
                },
                lang
            },
            success(result) {
                let res = {
                    totalRecords: result.result.totalCount,
                    list: result.result.driverCompList
                }
                if (result) {
                    resolve(res);
                    return;
                }
                reject(result);
            },
            error(msg) {
                reject(msg);
            }

        });

    });
}


// 3. 驱动--操作系统的下拉列表
export const driverOSOptions = ({
    lang
}) => {
    return new Promise((resolve, reject) => {
        appAjax.postJson({
            otherBaseUrl: cveApi,
            url: '/cve-security-notice-server/drivercomp/getOS',
            type: 'get',
            params: {
                lang: lang
            },
            success(result) {
                if (result) {
                    resolve(result.result);
                    return;
                }
                reject(result);
            },
            error(msg) {
                reject(msg);
            }

        });

    });
};

// 4. 驱动--架构的下拉列表
export const driverArchitectureOptions = ({
    lang
}) => {
    return new Promise((resolve, reject) => {
        appAjax.postJson({
            otherBaseUrl: cveApi,
            url: '/cve-security-notice-server/drivercomp/getArchitecture',
            type: 'get',
            params: {
                lang: lang
            },
            success(result) {
                if (result) {
                    resolve(result.result);
                    return;
                }
                reject(result);
            },
            error(msg) {
                reject(msg);
            }

        });

    });
};

// 5. 硬件--操作系统的下拉列表
export const hardwareOSOptions = ({
    lang
}) => {
    return new Promise((resolve, reject) => {
        appAjax.postJson({
            otherBaseUrl: cveApi,
            url: '/cve-security-notice-server/hardwarecomp/getOS',
            type: 'get',
            params: {
                lang: lang
            },
            success(result) {
                if (result) {
                    resolve(result.result);
                    return;
                }
                reject(result);
            },
            error(msg) {
                reject(msg);
            }

        });

    });
};

// 6. 硬件--架构的下拉列表
export const hardwareArchitectureOptions = ({
    lang
}) => {
    return new Promise((resolve, reject) => {
        appAjax.postJson({
            otherBaseUrl: cveApi,
            url: '/cve-security-notice-server/hardwarecomp/getArchitecture',
            type: 'get',
            params: {
                lang: lang
            },
            success(result) {
                if (result) {
                    resolve(result.result);
                    return;
                }
                reject(result);
            },
            error(msg) {
                reject(msg);
            }

        });

    });
};

// 7. 详情页查询
export const detailList = ({
    id
}) => {
    return new Promise((resolve, reject) => {
        appAjax.postJson({
            otherBaseUrl: cveApi,
            url: '/cve-security-notice-server/hardwarecomp/getOne',
            type: 'get',
            params: {
                id: id
            },
            success(result) {
                if (result) {
                    resolve(result.result);
                    return;
                }
                reject(result);
            },
            error(msg) {
                reject(msg);
            }

        });

    });
};

// 8. 详情页查询--列表
export const detailAapterList = ({
    id
}) => {
    return new Promise((resolve, reject) => {
        appAjax.postJson({
            otherBaseUrl: cveApi,
            url: '/cve-security-notice-server/hardwarecomp/getAdapterList',
            type: 'get',
            params: {
                hardwareId: id
            },
            success(result) {
                if (result) {
                    resolve(result.result);
                    return;
                }
                reject(result);
            },
            error(msg) {
                reject(msg);
            }

        });

    });
};