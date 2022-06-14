const domain_name = document.domain
var d_parts = domain_name.split('.')
var d_core = d_parts[d_parts.length-2]
if (d_parts[0] != "www"){
    d_core = d_parts.slice(0, d_parts.length-1).join('_')
}
console.log(d_core)
document.body.classList.add(d_core)
