function route(pathname, handle, response) {

    // /favicon.ico 요청 무시
    if (pathname === '/favicon.ico') {
        return;
    }
    console.log('pathname : ' + pathname);

    // 요청된 경로가 handle 객체에 있는 경우 실행
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.write('Not found.');
        response.end();
    }
}

exports.route = route;
