export default context => {
    const { route: { params } } = context
    console.log("params =>" + JSON.stringify( params))
    switch (params.page) {
   
      case 'tmp1':
      case 'tmp2':
          context.dynamicLayout = 'login'
          break;
        default:
          context.dynamicLayout = 'app'
          break;
    }
  }