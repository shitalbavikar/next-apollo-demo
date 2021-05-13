import React, {useRef, useEffect} from "react";
import uniqid from 'uniqid';
import { useQuery } from "@apollo/client";
import {Spinner} from "../Spinner/Spinner";
import styles from './Users.module.css';
import {UserCard} from './UserCard';
import {GET_USERS_INFO} from '../../lib/queries/getUsersInfo';


export const Users = () => {
  const messageRef = useRef<HTMLDivElement>(null);
  
  const { loading, error, data, fetchMore } = useQuery(GET_USERS_INFO, {
    variables: { after: null }
  });
  
  useEffect(() => {
     messageRef.current?.scrollIntoView({behavior: "smooth"}
  )},[data])


  const loadMoreUsersHandler = () => {
    const {endCursor} = data.users.pageInfo;
      
    fetchMore({
      variables: { after: endCursor },
      updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
        fetchMoreResult.users.edges = [
          ...prevResult.users.edges,
          ...fetchMoreResult.users.edges
        ];
        return fetchMoreResult;
      }});
     
}

  if(error) return <div>Error</div>;

  if (loading) return <Spinner/>;
  
 
 return (data && data.users.edges.length > 0 ? 
      <React.Fragment>
          {/* <Suspense fallback={<Spinner />}> */}
            <h3 className={styles.usersListTitle} data-test="users-list-title">Users List</h3>
            <div className={styles.usersWrapper} data-test="users-list-wrapper">
                {data.users.edges.map(user => { 
                return <UserCard key={uniqid()} userInfo = {user.node}/> })}
            </div>
          {/* </Suspense> */}
            <div className={styles.userActions} ref={messageRef} data-test="users-action-wrapper">
              <button className={styles.loadMoreButton} onClick={() => loadMoreUsersHandler()} data-test="users-action-loadMore">Load more</button>
            </div>
        </React.Fragment>
      : null 
      )
} 