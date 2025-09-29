// import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export const fakeBackendInterceptor: HttpInterceptorFn = (req, next) => {
//   const users = [
//     { email: 'keshu', password: 'keshu', admin: true },
//     { email: 'user', password: 'user', admin: false }
//   ];
//   return new Observable(observer => {
//     setTimeout(() => {
//       if (req.url.endsWith('/api/authenticate') && req.method === 'POST') {
//         const body = req.body as { email: string; password: string };
//         const user = users.find(u => u.email === body.email && u.password === body.password);

//         if (user) {
//           const token = `FAKE-JWT-TOKEN-${user.email}`;
//           observer.next(new HttpResponse({ status: 200, body: { token, admin: user.admin } }));
//           observer.complete();
//         } else {
//           observer.error({ status: 401, error: { message: 'Invalid credentials' } });
//         }
//         return;
//       }
//       // Pass through other requests
//       next(req).subscribe({
//         next: res => observer.next(res),
//         error: err => observer.error(err),
//         complete: () => observer.complete()
//       });
//     }, 1000);
//   });
// };
import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

export const fakeBackendInterceptor: HttpInterceptorFn = (req, next) => {
  const users = [
    { username: 'keshu', password: 'keshu', admin: true },
    { username: 'user', password: 'user', admin: false }
  ];

  return of(null).pipe(
    delay(1000), // simulate server delay
    mergeMap(() => {
      if (req.url.endsWith('/api/authenticate') && req.method === 'POST') {
        const body = req.body as { username: string; password: string };
        const user = users.find(u => u.username === body.username && u.password === body.password);

        if (user) {
          const token = `FAKE-JWT-TOKEN-${user.username}`;
          console.log(token);
          return of(new HttpResponse({ status: 200, body: { token, admin: user.admin ,username: user.username} }));
        } else {
          return throwError(() => ({ status: 401, error: { message: 'Invalid' } }));
        }
      }

      return next(req);
    })
  );
};
