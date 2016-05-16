/**
 * Created by Eyas on 2016/4/17.
 */
import setGlobal from "./setGlobal";
import Link from "react-router/lib/Link";
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';
import UserCard from "cc/UserCard";
// import FormText from "cc/Form/Text";
import Loading from 'cc/loading';

setGlobal({
  Link,
  Router,
  Route,
  IndexRedirect,
  UserCard,
  // FormText,
  Loading
})
