import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { media } from '../../utils/media'
import profile from '../../images/profile.png'

const Container = styled.section`
  display: flex;
  .avator {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .top {
      position: relative;
      .img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
      }
      .status {
        position: absolute;
        left: 0;
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
      color: #000;
      font-size: 2.2rem;
      margin-top: 1rem;
      margin-bottom: 0;
    }
    .desc {
      margin-top: 0;
    }
  }

  .items {
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-left: 5rem;
    .item {
      flex: 1;
      flex-direction: column;
      padding: 0.5rem;
      display: flex;
      .title {
        color: #666;
      }
      .content {
        font-weight: 800;
      }
    }
  }
`

const Profile = props => {
  const {
    name,
    info: { basic, blog, email, tel },
  } = props
  return (
    <Container>
      <div className="avator">
        <div className="top">
          <img className="img" src={profile} alt="简历头像" />
          <span className="status">在职</span>
        </div>
        <h1 className="name">{name}</h1>
        <p className="desc">{basic}</p>
      </div>
      <section className="items">
        {blog && (
          <div className="item">
            <span className="title">个人网站</span>
            <span className="blog content">
              <a target="_blank" href={blog}>
                https://yangerxiao.com
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
    </Container>
  )
}
export default Profile
