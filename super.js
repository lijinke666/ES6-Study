class Component {
  constructor(props){
    console.log(props);
  }
  componentDidMount(){
    console.log('老子会耍英雄联盟');
  }
}

class A extends Component{
  constructor(props){
    super(props)
  }
  test(){
    console.log('test');
    super.componentDidMount()
  }
}

const a = new A('草拟吗')
a.test()