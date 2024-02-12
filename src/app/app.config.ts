import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimations(), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ringoffire-43b70","appId":"1:929897219078:web:6bf14df120121971242f87","storageBucket":"ringoffire-43b70.appspot.com","apiKey":"AIzaSyBZWwNmBgw78EU0yACD10uZdGCsC-uTty4","authDomain":"ringoffire-43b70.firebaseapp.com","messagingSenderId":"929897219078","measurementId":"G-6T50EJV1BT"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ringoffire-43b70","appId":"1:929897219078:web:6bf14df120121971242f87","storageBucket":"ringoffire-43b70.appspot.com","apiKey":"AIzaSyBZWwNmBgw78EU0yACD10uZdGCsC-uTty4","authDomain":"ringoffire-43b70.firebaseapp.com","messagingSenderId":"929897219078","measurementId":"G-6T50EJV1BT"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ringoffire-43b70","appId":"1:929897219078:web:6bf14df120121971242f87","storageBucket":"ringoffire-43b70.appspot.com","apiKey":"AIzaSyBZWwNmBgw78EU0yACD10uZdGCsC-uTty4","authDomain":"ringoffire-43b70.firebaseapp.com","messagingSenderId":"929897219078","measurementId":"G-6T50EJV1BT"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ringoffire-43b70","appId":"1:929897219078:web:6bf14df120121971242f87","storageBucket":"ringoffire-43b70.appspot.com","apiKey":"AIzaSyBZWwNmBgw78EU0yACD10uZdGCsC-uTty4","authDomain":"ringoffire-43b70.firebaseapp.com","messagingSenderId":"929897219078","measurementId":"G-6T50EJV1BT"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
