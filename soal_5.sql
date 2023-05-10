SELECT * FROM tbl_coba 
WHERE tgl_pembelian BETWEEN '2022-02-23 23:22:21' AND '2022-02-20 02:20:02';

SELECT t1.* FROM tbl_coba t1
JOIN (
    SELECT penjual, MAX(tgl_pembelian) AS tgl_pembelian
    FROM tbl_coba
    GROUP BY penjual
) t2 ON t1.penjual = t2.penjual AND t1.tgl_pembelian = t2.tgl_pembelian;

SELECT no_pelanggan, COUNT(DISTINCT no_pembelian) as jumlah_pembelian 
FROM tbl_coba 
GROUP BY no_pelanggan 
HAVING COUNT(DISTINCT no_pembelian) > 1;
