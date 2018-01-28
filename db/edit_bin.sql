update bins 
set inv_name = $3, inv_price_cents = $4
where shelf_name = $1 and bin_num = $2;

select * from bins
where shelf_name = $1 and bin_num = $2;