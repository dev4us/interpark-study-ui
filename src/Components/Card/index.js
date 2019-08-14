import React, {useState} from "react";
import styled, {css} from "styled-components";

import Carousel from 'nuka-carousel';

import { MdFavoriteBorder, MdFavorite, MdBookmarkBorder, MdBookmark} from "react-icons/md";

import image1 from "../../Assets/Images/image1.jpg";
import image2 from "../../Assets/Images/image2.jpg";
import image3 from "../../Assets/Images/image3.jpg";
import image4 from "../../Assets/Images/image4.jpg";

import avatar from "../../Assets/Images/avatar.jpg";

const Card = ({title, date, location, contents, tags, likeCount, commentsCount}) => {
  const [isActiveHeart, handleHeart] = useState(false);
  const [isMarker, handleMarker] = useState(false);

  return (
    <>
      <Container>
        <CardFrame>
          <DetailFrame>
            <Thumbnail thumbnail={avatar}></Thumbnail>
            <InDetailFrame>
              <Location>{title}</Location>
              <Date>{date} / {location}</Date>
            </InDetailFrame>
          </DetailFrame>
          <PhotoFrame>
            <Carousel
              autoPlay={false}
              width="100%"
              heightMode="first"
              withoutControls={true}
            >
              <Photo src={image1} alt=""/>
              <Photo src={image2} alt=""/>
              <Photo src={image3} alt=""/>
              <Photo src={image4} alt=""/>
            </Carousel>
          </PhotoFrame>
          <CommunityFrame>
            <IconFrame>
            {
              isActiveHeart && (
                <FullHeartIcon onClick={() => handleHeart(!isActiveHeart)}></FullHeartIcon>
              )
            }
            {
              isActiveHeart === false && (
                <NullHeartIcon onClick={() => handleHeart(!isActiveHeart)}></NullHeartIcon>
              )
            }
            {
              isMarker && (
                <FullMarker onClick={() => handleMarker(!isMarker)}></FullMarker>
              )
            }
            {
              isMarker === false && (
                <NullMarker onClick={() => handleMarker(!isMarker)}></NullMarker>
              )
            }        
            </IconFrame>
            <CommentCount>
              좋아요 {likeCount}, 댓글 {commentsCount}
            </CommentCount>    
          </CommunityFrame>
          <ContentsFrame>
            {contents}
          </ContentsFrame>
          <TagFrame>
            {tags}
          </TagFrame>
          <BottomBar>
            <OpenComments>댓글 보기</OpenComments>
          </BottomBar>
        </CardFrame>
      </Container>
    </>
  );
}

const Container = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  margin-bottom:3rem;
`;

const CardFrame = styled.div`
  width:95%;
  min-height:15rem;
`;

const DetailFrame = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  flex:1;
`;

const Thumbnail = styled.div`
  width:3rem;
  height:3rem;
  border-radius:50%;
  background:black;
  margin-right:1rem;

  ${props => props.thumbnail !== '' && css`
    background:url(${props => props.thumbnail});
    background-size:100% 100%;
  `}
`;

const InDetailFrame = styled.div`
  display:flex;
  flex-direction:column;
  align-items:space-around;
  height:100%;
`;

const Location = styled.div`
  font-size:0.8rem;
  margin-bottom:0.3rem;
  font-weight:bold;
  color:#5d5d5d;
`;

const Date = styled.div`
  font-size:0.8rem;
  color:#5d5d5d;
`;

const PhotoFrame = styled.div`
  width:100%;
  margin-top:1.2rem;
`;

const Photo = styled.img`
  width:100vw !important;
  height:12rem;
`;

const CommunityFrame = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:0.5rem;
  padding-left:0.5rem;
  padding-right:0.5rem;
`;

const NullHeartIcon = styled(MdFavoriteBorder)`
  font-size:1.2rem;
  color:#ff3f3f;
  cursor:pointer;
`;

const FullHeartIcon = styled(MdFavorite)`
  font-size:1.2rem;
  color:#ff3f3f;
  cursor:pointer;
`;

const NullMarker = styled(MdBookmarkBorder)`
  font-size:1.2rem;
  color:#8bd45d;
  cursor:pointer;
  margin-left:0.3rem;
`;

const FullMarker = styled(MdBookmark)`
  font-size:1.2rem;
  color:#8bd45d;
  cursor:pointer;
  margin-left:0.3rem;
`;

const IconFrame = styled.div`
`;

const CommentCount = styled.div`
  font-size:0.5rem;
  color:#5b5b5b;
`;

const ContentsFrame = styled.div`
  display:flex;
  align-items:flex-end;
  width:100%;
  min-height:6rem;
  margin-top:0.3rem;
  font-size:0.8rem;
  color:#5d5d5d;
  padding-left:0.5rem;
  padding-right:0.5rem;
  line-height:1.5;
`;

const TagFrame = styled.div`
  color:#3e8bea;
  font-size:0.8rem;
  padding-left:0.5rem;
  padding-right:0.5rem;
  margin-top:0.3rem;
  line-height:1.5;
`;

const BottomBar = styled.div`
  border-top:1px solid #ececec;
  font-size:0.5rem;
  color:#5d5d5d;
  margin-top:0.8rem;
  padding-top: 0.8rem;
  padding-left:0.5rem;
  padding-right:0.5rem;
`;

const OpenComments = styled.div`

`;


export default Card;