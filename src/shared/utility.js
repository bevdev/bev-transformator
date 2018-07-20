export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const removeObjectById = (objectList, objectId) => {
    const newObjectList = objectList.filter( obj => {
        return obj.pointId !== objectId
    })
    return newObjectList;
}

export const removeObjectByIdx = (objectList, objectIdx) => {
    const newObjectList = [...objectList];
    console.log(objectList);
    console.log(objectIdx);
    newObjectList.splice(objectIdx, 1);
    return newObjectList;
}
