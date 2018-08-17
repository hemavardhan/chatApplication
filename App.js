import React from 'react';
import { StyleSheet, Text, View,TextInput,ListView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

class SignUpScreen extends React.Component{
 constructor()
 {
  super();
  this.state={
    f_name: '',
    l_name: '',
    u_name: '',
    password: '',
    message: '',
    message2: '',
    error: '',
    error1: '',
    error2: '',
    error3: '',

  }
  this.login=this.login.bind(this);
  this.SignUps=this.SignUps.bind(this);
 }

 login()
 {
  this.props.navigation.navigate('LoginS');
 }
SignUps()
 {
  var firstname=this.state.f_name;
  var lastname=this.state.l_name;
  var username=this.state.u_name;
  var password=this.state.password;
  var self=this;
  console.log(firstname+"    "+lastname+"   "+username+"     "+password+"  ");
  if(firstname!="" && lastname!="" && username!="" && password!= "")
  { 
    if(password.length>=6)
    {
      
      
     }
   else
    {
      this.setState({error: "",error1: "",error2:""});

      this.setState({message:"Your password must be equal or greater than 6"});
    }

  }
  else
  {
    if(firstname=="")
    {
      this.setState({error: "Please fill the firstname field"});
    }
    if(lastname=="")
    {
      this.setState({error1: "Please fill the lastname field"});
    }
    if(username=="")
    {
      this.setState({error2: "Please fill the username field"});
    }
    if (password=="") 
    {
      this.setState({message : "Please fill the password field"});
    }
    
  }
 }
  
render()
  {
    return(
      <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{ marginLeft: 40, fontSize: 30, padding: 10 }}>SignUp</Text>
        <Text  style={{marginLeft: 20,fontSize: 30 , borderWidth: 1, padding: 10, width: 250,textAlign: 'center'}} onPress={this.login}> Login</Text>
        </View>
        <Text style={{marginTop: 10,fontSize: 20, marginLeft: 20}}>First Name</Text>
        <TextInput style={{marginTop: 10,marginLeft: 20}} onChangeText={(text) => this.setState({f_name: text}) }/>
        <Text style={{marginLeft: 20,color: 'red'}}>{this.state.error}</Text>
        <Text style={{marginTop: 10,fontSize: 20, marginLeft: 20}}>LastName</Text>
        <TextInput  style={{marginTop: 10,marginLeft: 20}} onChangeText={(text) => this.setState({l_name: text}) }/>
        <Text style={{marginLeft: 20,color: 'red'}}>{this.state.error1}</Text>
        <Text style={{marginTop: 10,fontSize: 20, marginLeft: 20}}>UserName</Text>
        <TextInput style={{marginTop: 10,marginLeft: 20}} onChangeText={(text)=>this.setState({u_name: text})}/>
        <Text style={{marginLeft: 20,color: 'red'}}>{this.state.error2}</Text>
        <Text  style={{marginTop: 10,fontSize: 20, marginLeft: 20}}>Password</Text>
        <TextInput secureTextEntry={true} style={{marginTop: 10,marginLeft: 20}} onChangeText={(text)=>{this.setState({password:text})}}/>
        <Text style={{ marginLeft: 20 ,color: 'red'}}>{this.state.message}</Text>
        <Text style={{ marginLeft: 30,color: 'green', fontSize: 30,marginTop:30}}>{this.state.message2}</Text>

        <Text style={{borderWidth: 1,height: 60, width: 100, padding: 10,marginLeft: 100,marginTop: 30,fontSize: 20}} onPress={this.SignUps}> SignUp</Text> 
        

      </View>



      );
  }
}


class LoginScreen extends React.Component
{
  constructor()
  {
    super();
    this.state={
      username: '',
      password: '',
      message: '',
      error1:'',
      error2:'',
      message2: '',
    }



    this.GoSign=this.GoSign.bind(this);
    this.loginSu=this.loginSu.bind(this);
  }

  GoSign()
  {
    this.props.navigation.navigate('SignUp');
  }
  loginSu()
  {
    if(this.state.username!='' && this.state.password!='')
    {
        var self=this;
        this.props.navigation.navigate('Users');
         
    }
    else
    {
      if(this.state.username=='')
      {
        this.setState({error1:"Please fill the username"});
      }
      if(this.state.password=='')
      {
        this.setState({error2:"Please fill the password"});
      }
    }
  }

  render()
  {
    return(
      <View>
       <View style={{flexDirection: 'row'}}>
        <Text style={{ fontSize: 30, padding: 10,borderWidth:1, width: 200,textAlign: 'center'}} onPress={this.GoSign}>SignUp</Text>
        <Text style={{marginLeft: 20,fontSize: 30 ,padding: 10, width: 250,textAlign: 'center'}} >Login</Text>
        </View>
        <Text style={{marginTop: 15, marginLeft: 20,fontSize:20}}>UserName</Text>
        <TextInput style={{height: 20, marginTop: 20, marginLeft: 20}} onChangeText={(text)=>this.setState({username: text})}/>
        <Text style={{ marginLeft: 20, fontSize:15, color: 'red'}}>{this.state.error1}</Text>
        <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 20}}>Password</Text>
        <TextInput style={{height: 20, marginTop: 20, marginLeft: 20 }} secureTextEntry={true} onChangeText={(text) =>this.setState({password: text})}/>
        <Text style={{marginLeft: 20, fontSize:15, color: 'red'}}>{this.state.error2}</Text>
        <Text style={{marginLeft: 20, fontSize: 15,marginTop:20,color: 'red'}}>{this.state.message2}</Text>
        <Text style={{height: 60,width: 100, marginTop: 40 ,marginLeft: 80,borderWidth: 1,textAlign: 'center',padding: 8,fontSize: 20}} onPress={this.loginSu}> LogIn</Text>
      </View>


      );
  }
}

class UsersScreen extends React.Component
{
   constructor()
  {
    super();
    this.state={
      dyn: [],
      name: '',
    }
    this.Groupss=this.Groupss.bind(this);
    this.CreateGroup=this.CreateGroup.bind(this);
  

  
  }
  Groupss()
  {
    this.props.navigation.navigate('Groups');
  }
  CreateGroup()
  {
    this.props.navigation.navigate('CGroup');
  }
  Chat(p)
  {
    console.log(p)
    console.log(this.state.name) 
    
   this.props.navigation.navigate('ChatS',{name: p,username:this.state.name});
  }
  /*componentDidMount() 
        {
           const { navigation } = this.props;
           const name=navigation.getParam('username', 'username');
          this.setState({name:name})
           var self=this;

        request.post('http://192.168.1.107:5000/findusers')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({ username: name})
        .end(function(err, res){
         console.log(res.text);
         var k=res.text;
         var p=k.substring(1,k.length-1); 
         console.log(p.toString());
         var s=p.split(",");
         console.log(s);
         var l=[];
         for(var i=0;i<s.length;i++)
         {
          console.log("value of s is",s[i]);
          l.push(s[i].substring(1,s[i].length-1));
         }
         console.log(l);
         for(var i=0;i<l.length;i++)
         {

           self.setState({dyn: self.state.dyn.concat(<Text key={l[i]} style={{fontSize: 20,textAlign:'center',borderWidth:1,marginTop:20}}  onPress={self.Chat.bind(self,l[i])}>{l[i]}</Text>)});
         
         }
          })
    }*/

  render()
  {
        
        const { navigation } = this.props;
        const name=navigation.getParam('username', 'username');
             
    return(
      <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:30,textAlign:'center',color: 'green'}}>{name}</Text>
        <Text style={{marginLeft: 20,fontSize: 30 ,padding: 10, width: 250,textAlign: 'center',borderWidth: 1}} onPress={this.Groupss}>Group</Text>
        </View>
         <Text onPress={this.CreateGroup} style={{marginTop: 20,textAlign:'center',fontSize:20 ,borderWidth: 1}}>Create Group</Text>
      
      <Text onPress={this.Chat.bind(this,'user')} style={{marginTop: 20,textAlign:'center',fontSize:20,borderWidth: 1}}>User</Text>
     
      </View>

    );
  }

}
class GroupsScreen extends React.Component
{
  
  constructor()
  {
    super();
    this.userss=this.userss.bind(this);
  }
  userss()
  {
    this.props.navigation.navigate('Users');
  }

  render()
  {
    return(
      <View>
      <View style={{flexDirection: 'row'}}>
      <Text onPress={this.userss} style={{fontSize:30,padding: 10,width: 200,textAlign: 'center', borderWidth: 1}}>Users</Text>
      <Text style={{marginLeft:20, fontSize:30, padding: 10,width: 250, textAlign: 'center'}}>Groups</Text>
      </View>


      </View>

      );
  }
}

class CreategroupScreen extends React.Component
{
  constructor()
  {
    super();

  }
  render()
  {
    return(
    <View>
    <Text style={{fontSize: 20,marginTop: 20,marginLeft: 10}}>Group Name</Text>
    <TextInput style={{marginLeft:10,marginTop:10}}/>
    <Text style={{fontSize: 20,marginTop:15,marginLeft:10,borderWidth: 1,textAlign: 'center'}}>ADD Users</Text>
    <Text style={{fontSize: 20,marginTop:15,marginLeft:10}}>Enter Admin</Text>
    <TextInput style={{marginLeft:10,marginTop:10}}/>
    <Text style={{fontSize:20,marginLeft: 20,textAlign: 'center',borderWidth: 1,marginTop: 20}}> CREATE!!!</Text>




    </View>


    );
  }

}
class ChatScreen extends React.Component
{
  constructor()
  {
    super();
    this.state={
      message: '',
      message2: '',
    }
    this.additem=this.additem.bind(this);
  }
  additem()
  {
    var k=this.state.message2;
    var p=this.state.message;
    this.setState({message2: k+'\n'+p});

}


  render()
  {
     const { navigation } = this.props;
     const name=navigation.getParam('name', 'name');
     const u_name=navigation.getParam('username','username')
     console.log(u_name);
    return(
     <View style={{flex: 1}}>
     <Text style={{fontSize:40,textAlign: 'center',color: 'green'}}>{name}</Text>
     <Text style={{fontSize: 30}}>{this.state.message2}</Text>
   

    <View style={{position: 'absolute', left: 0, right: 0, bottom: 0,flexDirection: 'row'}}>
     <TextInput style={{width: 350}} onChangeText={(text) => this.setState({message: text})}/>
     <Text style={{borderWidth:1,fontSize:20,width:70,textAlign:'center'}} onPress={this.additem}> Send</Text>

     </View>
    </View>


      );
  }
}




const RootStack = createStackNavigator(
  {
    SignUp: SignUpScreen,
    LoginS: LoginScreen,
    Users: UsersScreen,
    Groups: GroupsScreen,
    CGroup: CreategroupScreen,
    ChatS: ChatScreen,


   
  },
  {
    initialRouteName: 'SignUp',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  


});
