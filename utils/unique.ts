export function unique(collection: string[]) {
    const uniqueElements: string[] = [];

    collection.forEach(item => {
        if(!uniqueElements.includes(item)) {
        uniqueElements.push(item);
        }
    })

    return uniqueElements
}

