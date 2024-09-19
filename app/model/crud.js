const dbpool = require('../config/database')

const create = (body) => {
    const sqlQuery = 'INSERT INTO barang (barang_id, nama_barang, brand_barang, warna, img_barang) VALUES (?, ?, ?, ?, ?)';

    return dbpool.execute(
        sqlQuery,
        [
            body.barang_id,
            body.nama_barang,
            body.brand_barang,
            body.warna,
            body.img_barang
        ]
    )
}

const read = () => {
    const sqlQuery = 'Select * from barang'

    return dbpool.execute(sqlQuery)
}

const deleteFunc = (barang_id) => {
    const sqlQuery = 'Delete from barang where barang_id = ?'

    return dbpool.execute(sqlQuery, [barang_id])
}

const edit = (body) => {
    const sqlQuery = 'UPDATE barang SET nama_barang = ?, brand_barang = ?, warna = ?, img_barang = ? WHERE barang_id = ?';

    return dbpool.execute(
        sqlQuery,
        [
            body.nama_barang,
            body.brand_barang,
            body.warna,
            body.img_barang,
            body.barang_id
        ]
    );
};

module.exports = {
    create, read, deleteFunc, edit
}