import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import { media } from '../../utils/media';
// import profileImg from '../../images/profile.png';

const Container = styled.section`
  .avator {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border-bottom: 1px solid #999; */
    .top {
      position: relative;
      .img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
      }
      .status {
        position: absolute;
        right: 0;
        bottom: 0.1rem;
        font-size: 0.5rem;
        line-height: 0.5rem;
        background: #333;
        color: #fff;
        padding: 0.2rem 0.3rem;
        border-radius: 1rem;
        z-index: -1;
      }
    }
    .name {
      font-size: 2.2rem;
      margin-top: 1rem;
      margin-bottom: 0;
    }
    .desc {
      margin-top: 0;
    }
  }

  .items {
    color:#000;
    display:flex;
    /* margin-top:.5rem; */
    flex-direction:column;
    justify-content:space-around;
    flex-wrap:wrap;
    @media ${media.tablet} {
        flex-direction:row;
        /* justify-content:flex-start;
        padding:.4rem; */
      }
    
    .item{
      flex:1;
      flex-direction:column;
      padding:.5rem;
      display:flex;
      border-left:2px solid #ddd;
      margin-top:.2rem;
      /* justify-content:center; */
      flex-wrap:wrap;
      @media ${media.tablet} {
        justify-content:flex-start;
      }
      @media ${media.desktop} {
        border-left:none;
        padding-left:0;
        align-items:center;
      }
    }
    
  }
`;

const Profile = props => {
  const {
    name,
    info: { basic, blog, email, tel }
  } = props
  return (<StaticQuery
    query={
      graphql`
        query ImgQuery {
          profile:file(relativePath:{eq:"profile.png"}){
            childImageSharp{
              fluid(maxWidth: 250){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    `}
    render={
      data => (
        <Container>
          <div className="avator">
            <div className="top">
              <Img className="img" fluid={data.profile.childImageSharp.fluid} alt="简历头像" />
              <span className="status">已离职</span>
            </div>
            <h1 className="name">{name}</h1>
            <p className="desc">{basic}</p>
          </div>
          <section className="items">
            {blog && (
              <div className="item">
                <span className="title">个人网站</span>
                <span className="blog">
                  <a target="_blank" href={blog}>
                    https://yangerxiao.com
              </a>
                </span>
              </div>
            )}

            {email && (
              <div className="item">
                <span className="title">邮箱</span> <span>{email}</span>
              </div>
            )}

            {tel && (
              <div className="item">
                <span className="title">电话</span>
                <span>
                  <a href={`tel:${tel}`}>{tel}</a>
                </span>
              </div>
            )}
          </section>
        </Container>)
    }
  />);
}
export default Profile
