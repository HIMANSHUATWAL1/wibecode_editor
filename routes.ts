// utility file for defining routes in a centralized manner

/**
 * An array of routes that are accessible to the public 
 * these routes do not require authentication
 * @type {string[]}
 
 */

export const publicRoutes: string[] = [
  "/auth/sign-in"

];

/**
 * An array of routes that are protected and require authentication
 * @type {string[]} 

*/

export const protectedRoutes: string[] = [

    "/"

];

/**
 * An Array of routes that are accessible to the public
 * Routes that start with this (api/auth) prefix do not require
 * authentication
 * @type {string[]}
 */

export const authRoutes: string[] = [

    "/auth/sign-in"

];

/**
 * An Array of routes that are accessible to the public
 * Routes that start with this (/api/auth) prefix do not require
 * authentication
 * @type {string[]}
 */

export const apiAuthPrefix: string = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/"; //changed to redirect to home page after login
