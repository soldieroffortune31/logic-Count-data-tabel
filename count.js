const getDetail = [
                    {id_detailbarang: '16627269732901001', id_barang: '1662725046434'},
                    {id_detailbarang: '16627269732901002', id_barang: '1662725046434'},
                    {id_detailbarang: '16627269732901003', id_barang: '1662725046434'},
                    {id_detailbarang: '16627286363491001', id_barang: '1662728593530'},
                    {id_detailbarang: '16627286363491002', id_barang: '1662728593530'}
                  ]
const getBarang = [
                    {id_barang: '1662725046434', jumlah : 3},
                    {id_barang: '1662728593530', jumlah : 4},
                    {id_barang: '1662735862174', jumlah : 1}
                  ]
               
// const filter = getBarang.filter(element => {
//     return element.jumlah > getDetail.filter(el => el.id_barang === element.id_barang).length;
// })
const filter = getBarang.filter(element => element.jumlah > getDetail.filter(el => el.id_barang ===element.id_barang).length)
console.log(filter)


filter.forEach(element => {
    console.log('ID Barang = '+element.id_barang+', jumlah = '+(element.jumlah-getDetail.filter(el => el.id_barang === element.id_barang).length));
})


// const count = getDetail.filter(element => element.id_barang === "H001").length
// console.log(count);
// Hasilnya
// const data = [
//                 {id_barang: 'H002', jumlah : 3}
//              ]

// const arr = [
//             {nama: "alief", age : 26},
//             {nama: "alief", age : 30},
//             {nama: "marno", age: 40}
//             ];


// const count = arr.filter(element => element.nama === "alief" ).length;
// for(let i=0; i<arr.length; i++){
//     if(arr[i].nama != "alief"){
//         console.log(arr[i]);
//     }
// }

// console.log(count);