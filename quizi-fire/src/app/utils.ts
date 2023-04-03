import * as assert from "assert";



export function assertExists<T>(value: T, text:string) {
    assert(value, text); 
    return value;
    }
