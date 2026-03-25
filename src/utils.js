export const propertyType = {
    SRC: 'src',
    CLASS: 'class',
    ID: 'id',
};

export function createElement(elementType, attribute, attributeValue) {
    const element = document.createElement(elementType);

    if (attribute && attributeValue)
        element.setAttribute(attribute, attributeValue);

    return element;
}

