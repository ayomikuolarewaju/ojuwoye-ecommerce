import { writable } from 'svelte/store';

export const cartCount = writable(0)
 
export const cartList = writable([])
