// ==== Código assincrono ==== 
function a() {
  console.log('a')
}
function b() {
  console.log('b')
}
function c() {
  console.log('c')
}

function main() {
  a()
  setTimeout(() => b(), 2000)
  c()
}

main()

// Call stack:
// 












// Thread interna
// 

// Task queue (event loop consome)
// 
