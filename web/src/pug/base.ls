hills = window.data.hills
me = window.data.me
hnodes = ld$.find \.hill
hnodes.map (n) -> 
  id = n.getAttribute(\data-id)
  if me.filter(->it.id == id).length => n.classList.add \active
order = {}
order.name = hills.map(->it.name).sort!
order.location = hills.map(->it.location).sort!

window.reorder = reorder = (k) ->
  hnodes.map (n) ->
    id = n.getAttribute(\data-id)
    m = ld$.find n, '[ld=id]', 0
    if !(ret = hills.filter(-> it.id ==  id).0) => return
    if k == \id =>
      n.style.order = Math.round(ret.id)
      m.innerText = ret.id
    else if k == \name =>
      n.style.order = order.name.indexOf(ret.name)
      m.innerText = ret.id
    else if k == \location =>
      n.style.order = order.location.indexOf(ret.location)
      m.innerText = ret.location.substring(0,2)
    else if k == \altitude =>
      n.style.order = 3000 - ret.altitude
      m.innerText = ret.id
    else if k == \date => 
      mret = me.filter(-> it.id == id).0
      n.style.order = if !mret => 3000 else 3000 - mret.year
      m.innerText = if mret => mret.year else '-'
    else if k == \schedule =>
      r = /([0-9.]+)小時/.exec(ret.schedule)
      if r => v = +r.1 * 60
      else 
        r = /([0-9.]+)分鐘/.exec(ret.schedule)
        if r => v = +r.1
        else v = 0
      m.innerText = "#{if v => v else ''}#{if r => '分鐘' else '-'}"
      n.style.order = if r => 600 - Math.round(+v) else 600
ldcv = new ldcover do
  root: \.ldcv
  resident: true
lc = {item: {}}
console.log ld$.find("[ld-scope='detail']")
view = new ldview do
  root: "[ld-scope=detail]"
  handler: do
    name: ({node}) -> node.innerText = lc.item.name
    desc: ({node}) -> node.innerText = lc.item.brief
    location: ({node}) -> node.innerText = lc.item.location
    map: ({node}) -> if lc.item.map => node.setAttribute \src, lc.item.map
window.toggle = toggle = (id) ->
  lc.item = (hills.filter(-> it.id == id).0 or {}) or {}
  view.render!
  ldcv.toggle!

obj = new pdmaptw type: \county, root: \.map
obj.init!
  .then ->
    obj.fit!
    console.log pdmaptw.projection!([122,23])
    #d3.select 'svg' .append \g .attr \class, 'poi'
    d3.select 'svg g' .selectAll \circle
      .data hills
      .enter!
        .append \circle
        .attr \r, 0.08
        .attr \cx, ->
          pdmaptw.projection!([it.lng, it.lat]).0
        .attr \cy, -> pdmaptw.projection!([it.lng, it.lat]).1
        .attr \class, (d) -> if me.filter(->it.id == d.id).length => 'active' else ''

