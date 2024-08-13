import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"employee-management-46644","appId":"1:1056570847551:web:a05e1c71f826d8ddb7238a","storageBucket":"employee-management-46644.appspot.com","apiKey":"AIzaSyB2Tz0siaZAnutSVEQamA5BXQ_h3OcQK50","authDomain":"employee-management-46644.firebaseapp.com","messagingSenderId":"1056570847551","measurementId":"G-VGCCF7WDFL"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"employee-management-46644","appId":"1:1056570847551:web:a05e1c71f826d8ddb7238a","storageBucket":"employee-management-46644.appspot.com","apiKey":"AIzaSyB2Tz0siaZAnutSVEQamA5BXQ_h3OcQK50","authDomain":"employee-management-46644.firebaseapp.com","messagingSenderId":"1056570847551","measurementId":"G-VGCCF7WDFL"})), provideFirestore(() => getFirestore())]
};
