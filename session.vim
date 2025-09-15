let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/personal-repos/TOP-Weather
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +6 src/index.js
badd +13 src/apiCall.js
badd +1 resources/notes.md
badd +33 webpack.common.js
badd +8 src/assets/weatherRefData.json
badd +1 ~/personal-repos/TOP-Weather
badd +21 src/template.html
badd +125 src/style.css
badd +8 src/elements.js
badd +7 src/hydrator.js
argglobal
%argdel
$argadd ~/personal-repos/TOP-Weather
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit src/index.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 30 + 105) / 210)
exe 'vert 2resize ' . ((&columns * 179 + 105) / 210)
argglobal
enew
file NvimTree_1
balt src/assets/weatherRefData.json
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal nofoldenable
lcd ~/personal-repos/TOP-Weather
wincmd w
argglobal
balt ~/personal-repos/TOP-Weather/src/assets/weatherRefData.json
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 6 - ((5 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 6
normal! 054|
lcd ~/personal-repos/TOP-Weather
wincmd w
exe 'vert 1resize ' . ((&columns * 30 + 105) / 210)
exe 'vert 2resize ' . ((&columns * 179 + 105) / 210)
tabnext
edit ~/personal-repos/TOP-Weather/src/style.css
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
split
1wincmd k
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 27 + 28) / 57)
exe '2resize ' . ((&lines * 26 + 28) / 57)
argglobal
balt ~/personal-repos/TOP-Weather/src/template.html
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 105 - ((16 * winheight(0) + 13) / 27)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 105
normal! 0
lcd ~/personal-repos/TOP-Weather
wincmd w
argglobal
if bufexists(fnamemodify("~/personal-repos/TOP-Weather/src/template.html", ":p")) | buffer ~/personal-repos/TOP-Weather/src/template.html | else | edit ~/personal-repos/TOP-Weather/src/template.html | endif
if &buftype ==# 'terminal'
  silent file ~/personal-repos/TOP-Weather/src/template.html
endif
balt ~/personal-repos/TOP-Weather/src/style.css
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 20 - ((13 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 20
normal! $
lcd ~/personal-repos/TOP-Weather
wincmd w
exe '1resize ' . ((&lines * 27 + 28) / 57)
exe '2resize ' . ((&lines * 26 + 28) / 57)
tabnext
edit ~/personal-repos/TOP-Weather/src/elements.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 30 + 105) / 210)
exe '2resize ' . ((&lines * 27 + 28) / 57)
exe 'vert 2resize ' . ((&columns * 179 + 105) / 210)
exe '3resize ' . ((&lines * 26 + 28) / 57)
exe 'vert 3resize ' . ((&columns * 179 + 105) / 210)
argglobal
enew
file ~/personal-repos/TOP-Weather/NvimTree_3
balt ~/personal-repos/TOP-Weather/src/style.css
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal nofoldenable
lcd ~/personal-repos/TOP-Weather
wincmd w
argglobal
balt ~/personal-repos/TOP-Weather/resources/notes.md
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 12 - ((11 * winheight(0) + 13) / 27)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 12
normal! 053|
lcd ~/personal-repos/TOP-Weather
wincmd w
argglobal
if bufexists(fnamemodify("~/personal-repos/TOP-Weather/src/hydrator.js", ":p")) | buffer ~/personal-repos/TOP-Weather/src/hydrator.js | else | edit ~/personal-repos/TOP-Weather/src/hydrator.js | endif
if &buftype ==# 'terminal'
  silent file ~/personal-repos/TOP-Weather/src/hydrator.js
endif
balt ~/personal-repos/TOP-Weather/src/template.html
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 4 - ((3 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 4
normal! $
lcd ~/personal-repos/TOP-Weather
wincmd w
exe 'vert 1resize ' . ((&columns * 30 + 105) / 210)
exe '2resize ' . ((&lines * 27 + 28) / 57)
exe 'vert 2resize ' . ((&columns * 179 + 105) / 210)
exe '3resize ' . ((&lines * 26 + 28) / 57)
exe 'vert 3resize ' . ((&columns * 179 + 105) / 210)
tabnext
edit ~/personal-repos/TOP-Weather/src/apiCall.js
argglobal
balt ~/personal-repos/TOP-Weather/resources/notes.md
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 13 - ((12 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 13
normal! $
lcd ~/personal-repos/TOP-Weather
tabnext 2
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
