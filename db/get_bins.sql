select * from bins
where shelf_name = $1
order by id;