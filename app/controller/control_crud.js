const crudModels = require('../model/crud')

const createBarang = async (req, res, next) => {
    const body = req.body;

    try {
        const result = await crudModels.create(body);
        res.status(201).json({
            status: 201,
            message: 'Data Created Successfully',
            data: {
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error.message,
        });
    }
}

const readBarang = async (req, res, next) => {
    try {
        const [data] = await crudModels.read()
        res.status(200).json({
            status: 200,
            message: 'Get Data Success',
            data: data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Server Error',
            error: error,
        })
    }
}

const deleteBarang = async (req, res, next) => {
    const { barang_id } = req.params;

    try {
        await crudModels.deleteFunc(barang_id)
        res.status(201).json({
            status: 201,
            message: 'Success Delete data',
            data: barang_id
        })
    } catch (error) {
        print(error)
        res.status(500).json({
            message: 'Server Error',
            error: error.message,
        });
    }
}

const editBarang = async (req, res, next) => {
    const { barang_id } = req.params;
    const { nama_barang, brand_barang, warna, img_barang } = req.body;

    console.log(barang_id, { nama_barang, brand_barang, warna, img_barang })

    try {
        const [data] = await crudModels.edit({ barang_id: barang_id, nama_barang: nama_barang, brand_barang: brand_barang, warna: warna, img_barang: img_barang })
        res.status(200).json({
            status: 200,
            message: 'Edit Data Success',
            data: req.body
        })
        console.log(data)
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({
            message: 'Server Error',
            error: error.message,
        });
    }
}

module.exports = {
    createBarang,
    readBarang,
    deleteBarang,
    editBarang
}