import React, { Component } from 'react'

export default class recentQuestions extends Component {
    render() {
        return (
            <div id="questionResult" class="main-col">
                <div class="feed-switcher">
                    <ul class="list-contents">
                        <li class="feed-tab" id="feed-tab-2">
                            Recent Questions
                            </li>
                    </ul>
                </div>

                <div class="feed">
                </div>
            </div>
        )
    }
}
