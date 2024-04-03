const { CategorytModel } = require('../models/CategoryModel');

const getProduct = async (productId) => {
    const products = await CategorytModel.find().exec();
    const thisCategory = products.find(c => c?.products.find(x => x?.id === Number(productId)));
    const product = thisCategory.products.find(c => c?.id === Number(productId));
    if (!product) {
        return 'product not found' + '  ' + productId;
    }
    return product;
}

const addProduct = async (categoryId, productName, productId) => {
    const products = await CategorytModel.find().exec();
    const thisCategory = products.find(c => c?.id === Number(categoryId));
    thisCategory.products.push({ name: productName, id: productId })
    await CategorytModel.updateOne({ id: categoryId }, { products: thisCategory.products });
    return 'Data Received!';
}

const updateProduct = async (productName, productId) => {
    const products = await CategorytModel.find().exec();
    const thisCategory = products.find(c => c?.products.find(x => x?.id === productId));
    thisCategory.products.forEach(p => {
        if (p.id == productId) {
            p.id = productId;
            p.name = productName;
        }
    })
    await CategorytModel.updateOne({ id: thisCategory.id }, { products: thisCategory.products });
    return "Data Update!!"
}

const deleteProduct = async (productId) => {
    const products = await CategorytModel.find().exec();
    const thisCategory = products.find(c => c?.products.find(x => x?.id === Number(productId)));
    const index = thisCategory.products.findIndex(p => p.id == Number(productId))
    thisCategory.products.splice(index, 1);
    await CategorytModel.updateOne({ id: thisCategory.id }, { products: thisCategory.products });
    return "Data Delete!!"
}

module.exports = {
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
}