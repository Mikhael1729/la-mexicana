export function init<T>(a: T, b: T): void {
    console.log(a, b); 
    Object.assign(a, b) 
}