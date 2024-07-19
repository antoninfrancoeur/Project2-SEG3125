import { NavUnder } from '../components/Nav.js';
import './Forum.css';
import {forumMainNav, linkToCreatePost, linkToForum} from '../data.js'
import profileIcon0 from '../assets/profile0.png';
import profileIcon1 from '../assets/profile1.png';
import { useT } from "talkr";
import {TextFieldInput, TextLineFieldInput} from '../components/TextFieldInput';

const titleLimit = 60;
const postLimit = 2000;

const samplePost = {
  title: "What school of magic should I start learning?",
  username: "Hopii THE Wizard Man",
  lastPostUsername: "Sticki",
  link: "/general/wiz-101/what-school-of-magic-should-i-start-learning",
  icon: profileIcon0,
  replyCount: 15,
  viewCount: 230,
  lastPostTime: "Jun 25, 2024, 02:56 AM",
};

const Division = () => {return(
  <div className='forum-row-divider'></div>
)};
const MessageDivision = () => {return(
  <div className='forum-message-divider'></div>
)};
const DetailRow = () => {
  const { T } = useT();

  return(
    <>
      <div className='forum-post-row'>
      <div className='width-55'></div>
      <div className='expand'>
        {T("forum.details.subject-started")}
      </div>
      <div className='width-150'>
        {T("forum.details.replies-views")}
      </div>
      <div className='width-200'>
        {T("forum.details.last-post")}
      </div>
    </div>
    </>
  );
} 

const LocaleDateToString = (locale, date) => {
  if (locale === 'en' || locale === 'pirate') {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  } else if (locale === 'fr') {
    return date.toLocaleString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  }
};

const ForumPost = ({post: {title, icon, username, link, replyCount, viewCount, lastPostUsername, lastPostTime}}) => {
  const { T, locale } = useT();
  const date = new Date(lastPostTime);
  const formattedDate = LocaleDateToString(locale, date);
  
  return(
    <>
      <MessageDivision />
      <div className='post-container'>
        <div className='forum-post-row vertical-pad'>
          <div className='post-user-square'>
            <img className='post-user-icon' src={icon} alt='Profile'/>
          </div>
          <div className='expand flex-vertical'>
            <div className='links-generic'><a href={linkToForum + link}><b>{title}</b></a></div>
            <div>{T('forum.details.by') + username}</div>
          </div>
          <div className='width-150 flex-vertical'>
            <div><b>{T("forum.details.replies")}</b>{replyCount}</div>
            <div><b>{T("forum.details.views")}</b>{viewCount}</div>
          </div>
          <div className='width-200 flex-vertical'>
            <div>{formattedDate}</div>
            <div>{T('forum.details.by') + lastPostUsername}</div>
          </div>
        </div>
      </div>
    </>
  );
}

const ForumPageDefault = () => {
  const { T } = useT();

  return (
    <div className='position-relative'>
      <div className='forum-page-header'>
        <div className='position-relative'>
          <h2 className="forum-title">{T("forum.categories.general")} &nbsp; &gt; &nbsp; {T("forum.subforums.wiz-101")}</h2>
          <div className='button-create-post links-generic'><a href={linkToCreatePost}>{T("forum.create-post.button")}</a></div>
          <br />
          <DetailRow />
        </div>
      </div>
      <ForumPost post={samplePost}/>
      <ForumPost post={samplePost}/>
      <ForumPost post={samplePost}/>
      <MessageDivision />
    </div>
  );
};

const ForumPageCreatePost = () => {
  const { T } = useT();

  return (
    <div className='position-relative'>
      <div className='forum-page-header'>
        <div className='position-relative'>
          <h2 className="forum-title">{T("forum.create-post.page-title")}</h2>
          <div className='button-create-post links-generic'><a href={linkToForum}>{T("forum.create-post.cancel")}</a></div>
          <br />
        </div>
      </div>
      <div className='forum-create-post-container'>
        <MessageDivision />
        <div className='create-post-container'>
          <TextLineFieldInput 
            maxLength={titleLimit} 
            caption={T("forum.create-post.title")}
            placeholder={T("forum.create-post.title-placeholder")}/>
        </div>
        <MessageDivision />
        <div className='create-post-container'>
          <TextFieldInput 
            maxLength={titleLimit} 
            caption={T("forum.create-post.text")}
            placeholder={T("forum.create-post.text-placeholder")}/>
        </div>
        <MessageDivision />
        <div className='create-post-container'>
          <div className="post-button links-generic">
            <a href={linkToForum}>Post</a>
          </div>
        </div>
      </div>
    </div>
  );
};

function Forum({doCreatePost}) {
  const { T } = useT();

  return (
    <>
      <div className='forum-container'>
        <div className='forum-sidebar'>
          <div className='forum-sidebar-container'>

            <h1>{T("forum.categories.title")}</h1>

            <Division />

            <div className='forum-label'>{T("forum.categories.general")}</div>
            <div className='forum-list-container'>
              <ul>
                <li>{T("forum.subforums.wiz-101")}</li>
                <li>{T("forum.subforums.spells")}</li>
                <li>{T("forum.subforums.orbs")}</li>
              </ul>
            </div>

            <Division />

            <div className='forum-label'>{T("forum.categories.schools")}</div>
            <div className='forum-list-container'>
              <ul>
                <li>{T("forum.subforums.evocation")}</li>
                <li>{T("forum.subforums.conjuration")}</li>
                <li>{T("forum.subforums.illusion")}</li>
                <li>{T("forum.subforums.necromancy")}</li>
                <li>{T("forum.subforums.transmutation")}</li>
                <li>{T("forum.subforums.divination")}</li>
                <li>{T("forum.subforums.enchantment")}</li>
                <li>{T("forum.subforums.abjuration")}</li>
              </ul>
            </div>

          </div>
        </div>
        <div className='vertical-line'></div>
        <div className='forum-main'>
          
          <div className="forum-page">
            {!doCreatePost && <ForumPageDefault/>}
            {doCreatePost && <ForumPageCreatePost/>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Forum;