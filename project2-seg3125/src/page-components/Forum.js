import { NavUnder } from '../components/Nav.js';
import './Forum.css';
import {forumMainNav} from '../data.js'
import profileIcon from '../assets/profile0.png';

const Division = () => {return(
  <div className='forum-row-divider'></div>
)};
const MessageDivision = () => {return(
  <div className='forum-message-divider'></div>
)};
const DetailRow = () => {
  return(
    <>
      <div className='forum-post-row'>
      <div className='width-55'></div>
      <div className='expand'>
        Subject / Started By
      </div>
      <div className='width-150'>
        Replies / Views
      </div>
      <div className='width-200'>
        Last Post
      </div>
    </div>
    </>
  );
} 
const ForumPost = () => {
  return(
    <>
      <MessageDivision />
      <div className='post-container'>
        <div className='forum-post-row vertical-pad'>
          <div className='post-user-square'>
            <img className='post-user-icon' src={profileIcon} alt='Profile'/>
          </div>
          <div className='expand flex-vertical'>
            <div><b>What school of magic should I start learning?</b></div>
            <div>by Hopii THE Wizard Man</div>
          </div>
          <div className='width-150 flex-vertical'>
            <div><b>Replies:</b> 23</div>
            <div><b>View:</b> 15</div>
          </div>
          <div className='width-200 flex-vertical'>
            <div>Jun 25, 2024, 02:56 AM</div>
            <div>by Sticki</div>
          </div>
        </div>
      </div>
    </>
  );
}

function Forum() {
  return (
    <>
      <div className='forum-container'>
        <div className='forum-sidebar'>
          <div className='forum-sidebar-container'>

            <h1>Categories &gt;&gt;</h1>

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
              <ForumPost />
              <ForumPost />
              <ForumPost />
              <MessageDivision />
          </div>
        </div>
      </div>
    </>
  );
}

export default Forum;