import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { media } from '../../utils/media'
import profile from '../../images/profile.png'

const Container = styled.section`
  display: flex;
  flex-direction: column;

  /* padding-right */
  .profile {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    .social {
      padding: 1rem 0;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      /* justify-content: space-around; */
      /* flex-wrap: wrap; */
      /* margin-left: 5rem; */
      .item {
        flex: 1;
        flex-direction: column;
        align-items: flex-end;
        padding-right: 0.5rem;
        display: flex;
        .title {
          color: #666;
          font-size: 0.8rem;
        }
        .content {
          font-weight: 800;
        }
      }
    }
    .head {
      position: relative;
      .img {
        width: 11rem;
        height: 11rem;
        border-radius: 50%;
      }
      .status {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 0.5rem;
        line-height: 0.5rem;
        background: #333;
        color: #fff;
        padding: 0.2rem 0.3rem;
        border-radius: 1rem;
        z-index: -1;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      /* margin-right: 1rem; */

      .name {
        color: #000;
        font-size: 2.2rem;
        margin-top: 0;
        margin-bottom: 0;
      }
      .desc {
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 0.8rem;
      }
    }
  }
`
const getHostUrl = (url) => {
  let tmp = new URL(url)
  return `${tmp.host}${tmp.pathname == '/' ? '' : tmp.pathname}`
}
const Profile = (props) => {
  const {
    name,
    info: { basic, blog, email, tel, github }
  } = props
  return (
    <Container>
      <div className="profile">
        <div className="info">
          <h1 className="name">{name}</h1>
          <p className="desc">{basic}</p>
        </div>
        <div className="head">
          <img className="img" src={profile} alt="简历头像" />
          <span className="status">在职</span>
        </div>
        <section className="social">
          {github && (
            <div className="item">
              <span className="title">GitHub</span>
              <span className="blog content">
                <a target="_blank" href={github}>
                  {getHostUrl(github)}
                </a>
              </span>
            </div>
          )}
          {blog && (
            <div className="item">
              <span className="title">个人站点</span>
              <span className="blog content">
                <a target="_blank" href={blog}>
                  {getHostUrl(blog)}
                </a>
              </span>
            </div>
          )}

          {email && (
            <div className="item">
              <span className="title">邮箱</span>
              <span className="content">{email}</span>
            </div>
          )}

          {tel && (
            <div className="item">
              <span className="title">电话</span>
              <span className="content">
                <a href={`tel:${tel}`}>{tel}</a>
              </span>
            </div>
          )}
        </section>
      </div>
    </Container>
  )
}
export default Profile
