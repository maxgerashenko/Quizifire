import * as assert from "assert";


export interface ObjectType<T> {
    [key:string]: T
};

export function assertExists<T>(value: T, text:string) {
    assert(value, text); 
    return value;
    }
