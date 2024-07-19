import { NavUnder } from '../components/Nav.js';
import './Forum.css';
import {forumMainNav} from '../data.js'
import profileIcon from '../assets/profile0.png';
import { useT } from "talkr";

const samplePost = {
  title: "What school of magic should I start learning?",
  username: "Hopii THE Wizard Man",
  lastPostUsername: "Sticki",
  icon: profileIcon,
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

const ForumPost = ({post: {title, icon, username, replyCount, viewCount, lastPostUsername, lastPostTime}}) => {
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
            <div><b>{title}</b></div>
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

function Forum() {
  const { T, locale } = useT();

  return (
    <>
      <div className='forum-container'>
        <div className='forum-sidebar'>
          <div className='forum-sidebar-container'>

            <h1>{T("forum.categories")}</h1>

            <Division />

            <div className='forum-label'>General</div>
            <div className='forum-list-container'>
              <ul>
                <li>Wiz 101</li>
                <li>Spells</li>
                <li>Orbs</li>
              </ul>
            </div>

            <Division />

            <div className='forum-label'>Schools</div>
            <div className='forum-list-container'>
              <ul>
                <li>Evocation</li>
                <li>Conjuration</li>
                <li>Illusion</li>
                <li>Necromancy</li>
                <li>Transmutation</li>
                <li>Divination</li>
                <li>Enchantment</li>
                <li>Abjuration</li>
              </ul>
            </div>

          </div>
        </div>
        <div className='vertical-line'></div>
        <div className='forum-main'>
          <div style={{position: 'absolute'}}><NavUnder items={forumMainNav} /></div>
          
          <div className="forum-page">
            <div className='forum-page-header'>
              <h2 className="forum-title">General : Wiz101</h2>
              <br />
              <DetailRow />
            </div>
              <ForumPost post={samplePost}/>
              <ForumPost post={samplePost}/>
              <ForumPost post={samplePost}/>
              <MessageDivision />
          </div>
        </div>
      </div>
    </>
  );
}

export default Forum;