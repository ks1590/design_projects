# Vue sample

## Office.vue
    <template>
      <div class="page-wrap">
        <div class="sidebar-wrap">
          <UserBlock @captureEvent="handleCapturePic" ref="userBlockComponent" />
          <ChatAdministration @openChat="openChat" ref="chatAdministration" />
        </div>
        <div class="main-wrap">
          <div class="main-content-wrap">
            <div class="content-section">
              <StickyPost ref="stickyPostComponent" />
            </div>
    
            <div v-if="$store.getters['members/filteredInOffice'].length > 0" class='content-section'>
              <div class='content-header'>
                <h1 class='office-title'>在社</h1>
              </div>
              <div class='user-wrap'>
                <div class='user' v-for="member in $store.getters['members/filteredInOffice']" :style="checkSearchFilter(member) ? '':'display: none;'">
                  <div v-if="member.message === ''" @click='openUserModal(member)' class='user-icon' :id='member.uid'>
                    <img :src="member.photoUrl !== '' ? member.photoUrl : '/user480x480.png'" />
    
                    <div class='wrapper'>
                      <div v-if="$store.getters\['calendar/getCurrentCalendarEvent'\](member.uid) !== false" class='calendar-wrapper'>
                        <div class='calendar_icon'>
                          <div class='calendar_icon__inner' v-b-tooltip.hover.topleft="{customClass:'calendar-tooltip'}"
                               :title='calendarEventDateTitle(member.uid)'>
                            <div class='item'>
                              <b-icon-calendar-event></b-icon-calendar-event>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="$store.getters\['members/getCurrentUserBirthday'\](member.uid) !== false"
                           class='calendar-wrapper'>
                        <div class='birthday_icon'>
                          <div class='birthday_icon__inner' v-b-tooltip.hover.bottomleft="{customClass:'calendar-tooltip'}"
                               :title="'Happy Birthday (' + birthdayToHidzukeNoZero($store.getters\['members/getCurrentUserBirthday'\](member.uid).birthday) + ')'">
                            <div class='item'>
                              <font-awesome-icon icon='birthday-cake' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div class='user-icon__details'>
                      <p class='user-icon__details__timestamp'>
                        <span class='timestamp__green'></span>{{ member.taken ? dateFormat(member.taken.toDate()) : dateFormat(new Date('2020-04-24')) }}
                      </p>
                      <p class='user-icon__details__user-name'>
                        {{ member.alias && member.alias !== '' ? member.alias : member.name }}
                      </p>
                    </div>
                  </div>
    
                  <div v-else class="user-icon message" @click="openUserModal(member)">
                    <img :src="member.photoUrl !== '' ? member.photoUrl : '/user480x480.png'"/>
    
                    <div class='wrapper'>
                      <div v-if="$store.getters\['calendar/getCurrentCalendarEvent'\](member.uid) !== false"
                           class='calendar-wrapper'>
                        <div class='calendar_icon'>
                          <div class='calendar_icon__inner' v-b-tooltip.hover.topleft="{customClass:'calendar-tooltip'}"
                               :title='calendarEventDateTitle(member.uid)'>
                            <div class='item'>
                              <b-icon-calendar-event></b-icon-calendar-event>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="$store.getters\['members/getCurrentUserBirthday'\](member.uid) !== false"
                           class='calendar-wrapper'>
                        <div class='birthday_icon'>
                          <div class='birthday_icon__inner' v-b-tooltip.hover.bottomleft="{customClass:'calendar-tooltip'}"
                               :title="'Happy Birthday (' + birthdayToHidzukeNoZero($store.getters\['members/getCurrentUserBirthday'\](member.uid).birthday) + ')'">
                            <div class='item'>
                              <font-awesome-icon icon='birthday-cake' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div class="message__details">
                      <div class="message__details__body">
                        <p class="message__details__body__user-name">{{ member.alias && member.alias !== '' ? member.alias : member.name }}</p>
                        <p class="message__details__body__text">{{ member.message }}</p>
                      </div>
                    </div>
                  </div>
    
                  <div class="teledesk-display">
                    <div class="desk-number">
                      <p class="mb-0">机:</p>
                      <p class="mb-0">{{ member.currentDeskNumber }}</p>
                    </div>
                    <div class="tel-number">
                      <p class="mb-0">内線:</p>
                      <p class="mb-0">{{ deskNumberToTel(member.currentDeskNumber) }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div v-if="$store.getters['members/filteredOutOfOffice'].length > 0" class="content-section">
              <div class="content-header">
                <h1 class="office-title">リモートワーク</h1>
              </div>
              <div class='user-wrap'>
                <div class='user' v-for="member in $store.getters['members/filteredOutOfOffice']"
                     :style="checkSearchFilter(member) ? '':'display: none;'">
                  <div v-if="member.message === ''" @click='openUserModal(member)' class='user-icon' :id='member.uid'>
                    <img :src="member.photoUrl !== '' ? member.photoUrl : '/user480x480.png'" />
                    <div class='wrapper'>
                      <div v-if="$store.getters\['calendar/getCurrentCalendarEvent'\](member.uid) !== false"
                           class='calendar-wrapper'>
                        <div class='calendar_icon'>
                          <div class='calendar_icon__inner' v-b-tooltip.hover.topleft="{customClass:'calendar-tooltip'}"
                               :title='calendarEventDateTitle(member.uid)'>
                            <div class='item'>
                              <b-icon-calendar-event></b-icon-calendar-event>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="$store.getters\['members/getCurrentUserBirthday'\](member.uid) !== false"
                           class='calendar-wrapper'>
                        <div class='birthday_icon'>
                          <div class='birthday_icon__inner'
                               v-b-tooltip.hover.bottomleft="{customClass:'calendar-tooltip'}"
                               :title="'Happy Birthday (' + birthdayToHidzukeNoZero($store.getters\['members/getCurrentUserBirthday'\](member.uid).birthday) + ')'">
                            <div class='item'>
                              <font-awesome-icon icon='birthday-cake' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='user-icon__details'>
                      <p class='user-icon__details__timestamp'><span
                        class='timestamp__green'></span>{{ member.taken ? dateFormat(member.taken.toDate()) : dateFormat(new Date('2020-04-24')) }}</p>
                      <p class='user-icon__details__user-name'>
                        {{ member.alias && member.alias !== '' ? member.alias : member.name }}</p>
                    </div>
                  </div>
    
                  <div v-else class='user-icon message' @click='openUserModal(member)'>
                    <img :src="member.photoUrl !== '' ? member.photoUrl : '/user480x480.png'" />
    
                    <div class='wrapper'>
                      <div v-if="$store.getters\['calendar/getCurrentCalendarEvent'\](member.uid) !== false"
                           class='calendar-wrapper'>
                        <div class='calendar_icon'>
                          <div class='calendar_icon__inner' v-b-tooltip.hover.topleft="{customClass:'calendar-tooltip'}"
                               :title='calendarEventDateTitle(member.uid)'>
                            <div class='item'>
                              <b-icon-calendar-event></b-icon-calendar-event>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="$store.getters\['members/getCurrentUserBirthday'\](member.uid) !== false"
                           class='calendar-wrapper'>
                        <div class='birthday_icon'>
                          <div class='birthday_icon__inner' v-b-tooltip.hover.bottomleft="{customClass:'calendar-tooltip'}"
                               :title="'Happy Birthday (' + birthdayToHidzukeNoZero($store.getters\['members/getCurrentUserBirthday'\](member.uid).birthday) + ')'">
                            <div class='item'>
                              <font-awesome-icon icon='birthday-cake' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div class="message__details">
                      <div class="message__details__body">
                        <p class="message__details__body__user-name">{{ member.alias && member.alias !== '' ? member.alias : member.name }}</p>
                        <p class="message__details__body__text">{{ member.message }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div v-if="$store.getters['members/filteredHoliday'].length > 0" class='content-section'>
              <div class='content-header'>
                <h1 class='office-title'>お休み</h1>
              </div>
              <div class='user-wrap'>
                <div class='user' v-for="member in $store.getters['members/filteredHoliday']"
                     :style="checkSearchFilter(member) ? '':'display: none;'">
                  <div @click='openUserModal(member)' class='user-icon' :id='member.uid'>
                    <img :src="member.defaultIcon !== '' ? member.defaultIcon : '/user480x480.png'" />
                    <div class='wrapper'>
                      <div v-if="$store.getters\['members/getCurrentUserBirthday'\](member.uid) !== false"
                           class='calendar-wrapper'>
                        <div class='birthday_icon'>
                          <div class='birthday_icon__inner'
                               v-b-tooltip.hover.bottomleft="{customClass:'calendar-tooltip'}"
                               :title="'Happy Birthday (' + birthdayToHidzukeNoZero($store.getters\['members/getCurrentUserBirthday'\](member.uid).birthday) + ')'">
                            <div class='item'>
                              <font-awesome-icon icon='birthday-cake' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='user-icon__details'>
                      <p class='user-icon__details__user-name'>
                        {{ member.alias && member.alias !== '' ? member.alias : member.name }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div v-if="$store.getters['members/filteredOffline'].length > 0" class='content-section'>
              <div class='content-header'>
                <h1 class='office-title'>オフライン</h1>
              </div>
              <div class='user-wrap'>
                <div class='user' v-for="member in $store.getters['members/filteredOffline']"
                     :style="checkSearchFilter(member) ? '':'display: none;'">
                  <div @click='openUserModal(member)' class='user-icon' :id='member.uid'>
                    <img :src="member.defaultIcon !== '' ? member.defaultIcon : '/user480x480.png'" />
                    <div class='wrapper'>
                      <div v-if="$store.getters\['members/getCurrentUserBirthday'\](member.uid) !== false"
                           class='calendar-wrapper'>
                        <div class='birthday_icon'>
                          <div class='birthday_icon__inner'
                               v-b-tooltip.hover.bottomleft="{customClass:'calendar-tooltip'}"
                               :title="'Happy Birthday (' + birthdayToHidzukeNoZero($store.getters\['members/getCurrentUserBirthday'\](member.uid).birthday) + ')'">
                            <div class='item'>
                              <font-awesome-icon icon='birthday-cake' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='user-icon__details'>
                      <p class='user-icon__details__user-name'>
                        {{ member.alias && member.alias !== '' ? member.alias : member.name }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <ChatInteraction v-click-outside="closeChatComponent" ref="chatComponent" />
          <div v-if="$store.getters['members/filteredSelf'].isAdmin || $store.getters['members/filteredSelf'].isDev" class="admin-buttons mr-2 mb-2">
            <div class="admin-buttons-wrap">
              <div class="admin_modal_button" @click="$refs.userHolidayAdvanced.openModal();">
                <div class="admin_modal_button__inner">
                  <b-icon-calendar2-check></b-icon-calendar2-check>
                </div>
              </div>
              <UserHolidayAdvanced ref="userHolidayAdvanced" />
            </div>
            <div class="admin-buttons-wrap">
              <div class="admin_modal_button" @click="$refs.userHoliday.openModal();">
                <div class="admin_modal_button__inner">
                  <b-icon-calendar2-plus></b-icon-calendar2-plus>
                </div>
              </div>
              <UserHoliday ref="userHoliday" />
            </div>
            <div class="admin-buttons-wrap">
              <div class="admin_modal_button" @click="$refs.userHolidayRemove.openModal();">
                <div class="admin_modal_button__inner">
                  <b-icon-calendar2-minus></b-icon-calendar2-minus>
                </div>
              </div>
              <UserHolidayRemove ref="userHolidayRemove" />
            </div>
            <div v-if="$store.getters['members/filteredSelf'].isDev" class="admin-buttons-wrap">
              <div class="admin_modal_button ml-2" @click="$refs.chatworkId.openModal();">
                <div class="admin_modal_button__inner">
                  <b-icon-person-square></b-icon-person-square>
                </div>
              </div>
              <ChatworkId ref="chatworkId" />
            </div>
          </div>
        </div>
        <video class="hidden" playsinline loop muted ref="video" id="video" width="240" height="240" autoplay></video>
        <canvas class="hidden" ref="canvas" id="canvas" width="240" height="240"></canvas>
    
        <b-modal
          size="lg"
          id="admin-edit"
          ref="admin-edit-modal"
          :title="uidToMemberName(otherUid)"
          @ok="handleAdminOk"
          ok-variant="primary"
          cancel-title="キャンセル"
          ok-title="更新する"
        >
          <b-button block @click="createOrOpenPairedChat(otherUid)" variant="primary" class="text-center ignore-click">
            <div><b-icon-chat-square></b-icon-chat-square></div>
            <div>ダイレクトメッセージ</div>
          </b-button>
        <b-button block @click="sendThankYou(otherUid)" variant="primary" class="text-center">
          <div><b-icon-heart></b-icon-heart></div>
          <div>Thank You!</div>
        </b-button>
          <hr>
          <div class="row justify-content-beginning">
            <div class="col-12 mb-3">
              <form ref="form" @submit.stop.prevent="handleAdminSubmit()">
                <b-form-group label="お休みステータス">
                  <b-row class="mb-2">
                    <div class="col-6">
                      <b-form-group label="日付からお休み" label-for="holiday__starts_at__input">
                        <b-form-datepicker
                          id="holiday__starts_at__input"
                          v-model="holidayStart"
                          :min="new Date()"
                          @input="holidayEnd = null"
                          today-button
                          reset-button
                          close-button
                          locale="ja"
                        ></b-form-datepicker>
                      </b-form-group>
                    </div>
                    <div class="col-6">
                      <b-form-group label="日付までお休み" label-for="holiday__expires_at__input">
                        <b-form-datepicker
                          :disabled="holidayStart === null || holidayStart === ''"
                          id="holiday__expires_at__input"
                          v-model="holidayEnd"
                          :min="minimumDate"
                        ></b-form-datepicker>
                      </b-form-group>
                    </div>
                  </b-row>
                </b-form-group>
                <b-form-group label="机番号を選ぶ（机番号が正しい場合は在社を押す）" label-for="teledesk-select">
                  <b-row class="mb-2">
                    <div class="col-6">
                      <b-button block @click="inOffice" variant="primary">在社</b-button>
                    </div>
                    <div class="col-6">
                      <b-button block @click="outOfOffice" variant="primary">リモートワーク</b-button>
                    </div>
                  </b-row>
                  <b-form-select v-model="deskNumber" class="mb-3">
                    <b-form-select-option v-for="option in $store.state.teledesk.teledeskList" :value="option.deskNumber" :key="option.id">
                      {{ option.deskNumber }}
                    </b-form-select-option>
                  </b-form-select>
                </b-form-group>
                <b-form-group label="ステータスメッセージ（MT中、昼休憩中など）" label-for="message-input">
                  <b-row class="mb-2">
                    <div class="col-6">
                      <b-button block @click="quickMessage('休憩中')" variant="primary">
                        休憩中
                      </b-button>
                    </div>
                    <div class="col-6">
                      <b-button block @click="quickMessage('MTG中')" variant="primary">
                        MTG中
                      </b-button>
                    </div>
                  </b-row>
                  <div class="pb-3">
                    <b-form-input
                      id="message-input"
                      v-model="userMessage"
                      placeholder="MT中、昼休憩中など"
                    ></b-form-input>
                  </div>
                </b-form-group>
                <b-form-group label="お名前（漢字）" label-for="alias-input">
                  <b-form-input
                    id="alias-input"
                    v-model="userAlias"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="お名前（ふりがな）" label-for="kana-input">
                  <b-form-input
                    id="kana-input"
                    v-model="userKanaName"
                  ></b-form-input>
                </b-form-group>
                <b-row class="mb-2">
                  <div class="col-12">
                    <b-form-group label="お誕生日(日付のみ設定。西暦を選択する必要ありません。)" label-for="birthday_at__input">
                      <b-form-datepicker
                        id="birthday_at__input"
                        today-button
                        reset-button
                        close-button
                        locale="ja"
                        v-model="userBirthDay"
                      ></b-form-datepicker>
                    </b-form-group>
                  </div>
                </b-row>
              </form>
            </div>
          </div>
        </b-modal>
    
        <b-modal
          size="lg"
          id='other-link'
          ref='other-link-modal'
          :title='uidToMemberName(otherUid)'
          @ok='handleOtherOk'
          ok-only
          ok-variant='secondary'
          ok-title='閉じる'
        >
          <div class='row justify-content-beginning'>
            <div class="col-12 mb-3">
              <b-button block @click="createOrOpenPairedChat(otherUid)" variant="primary" class="text-center ignore-click">
                <div><b-icon-chat-square></b-icon-chat-square></div>
                <div>ダイレクトメッセージ</div>
              </b-button>
            </div>
            <div class="col-12">
              <b-button block @click="sendThankYou(otherUid)" variant="primary" class="text-center">
                <div><b-icon-heart></b-icon-heart></div>
                <div>Thank You!</div>
              </b-button>
            </div>
          </div>
        </b-modal>
    
        <b-modal id="floor-guide-modal" ref="floor-guide-modal" size="lg" hide-footer hide-header>
          <div class="floorguide">
            <img src="/floorguide.jpg">
          </div>
        </b-modal>
        <b-modal id="light-guide-modal" ref="light-guide-modal" size="lg" hide-footer hide-header>
          <div class="lightguide">
            <img src="/lightguide.jpg">
          </div>
        </b-modal>
        <b-modal id='birthday-guide-modal' ref='birthday-guide-modal' size='md' body-class='pink-background' hide-footer
                 hide-header>
          <div class='content-section' v-if="$store.getters['members/getCurrentMonthUserBirthday'].length > 0">
            <div class='monthly-birthday-wrapper mt-3'>
              <h3 class='birthday-title'>
                <font-awesome-icon class='cake' icon='birthday-cake' />
                HAPPY BIRTHDAY
                <font-awesome-icon class='cake' icon='birthday-cake' />
              </h3>
              <h5 class='birthday-count'>
                今月は{{ birthdayCount() }}人お誕生日です!
              </h5>
              <hr>
              <div class='birthday-user-wrapper'>
                <div v-for="member in $store.getters['members/getCurrentMonthUserBirthday']" class='birthday-user'>
                  <div class='user-birthday'>
                    {{ birthdayToHidzukeNoZero(member.birthday) }}
                    {{ member.name }}
                  </div>
                  <hr>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
      </div>
    </template>
    
    <script>
      import StickyPost from "@/components/StickyPost";
      import ChatInteraction from "@/components/ChatInteraction";
      import ChatAdministration from "@/components/ChatAdministration";
      import UserBlock from "@/components/UserBlock";
      import UserHoliday from "@/components/Admin/UserHoliday";
      import UserHolidayRemove from "@/components/Admin/UserHolidayRemove";
      import ChatworkId from "@/components/Admin/ChatworkId";
      import UserHolidayAdvanced from "@/components/Admin/UserHolidayAdvanced";
      import moment from 'moment'
    
      export default {
        name: "office.vue",
        components: {
          UserHolidayAdvanced,
          UserHolidayRemove,
          ChatworkId,
          UserHoliday,
          UserBlock,
          StickyPost,
          ChatInteraction,
          ChatAdministration
        },
        data: function() {
          return {
            video: {},
            canvas: {},
            camera_interval: '',
            userMessage: '',
            userAlias: '',
            userKanaName: '',
            userBirthDay: '',
            deskNumber: '',
            holidayStart: null,
            holidayEnd: null,
            otherUid: '',
            devices: []
          }
        },
        computed: {
          minimumDate() {
            if (this.holidayStart === null) {
              return new Date();
            } else {
              return this.holidayStart
            }
          }
        },
        methods: {
          calendarEventDateTitle(uid) {
            let currentEvent = this.$store.getters\['calendar/getCurrentCalendarEvent'\](uid);
            if (currentEvent !== false) {
              let title = currentEvent.summary
              if (currentEvent.start && currentEvent.end && currentEvent.start.dateTime && currentEvent.end.dateTime) {
                title += " ("+this.dateFormat(new Date(currentEvent.start.dateTime))+"〜"+this.dateFormat(new Date(currentEvent.end.dateTime))+")";
              } else {
                title += " ("+this.dateFormatNoTime(new Date(currentEvent.start.date))+"〜"+this.dateFormatNoTime(new Date(currentEvent.end.date))+")";
              }
              return title;
            } else {
              return '';
            }
          },
          birthdayToHidzukeNoZero(date) {
            return moment(date).format("M/D");
          },
          birthdayCount(){
            return this.$store.getters['members/getCurrentMonthUserBirthday'].length;
          },
          birthdayToHidzuke(date) {
            return moment(date).format("MM/DD");
          },
          closeChatComponent() {
            this.$nextTick(function () {
              if (this.$refs.chatComponent.chat_open) {
                this.$refs.chatComponent.closeChat();
              }
            });
          },
          checkSearchFilter(member) {
            if (this.$store.state.search.searchTerm !== '') {
              return !!this.$store.getters['search/filteredUsers'].includes(member.uid);
            } else {
              return true;
            }
          },
          deskNumberToTel(deskNumber) {
            if (deskNumber && deskNumber !== '-1') {
              return this.$store.state.teledesk.teledeskList.filter(teledesk => teledesk.deskNumber === deskNumber).map(teledesk => teledesk.telNumber)[0];
            }
          },
          uidToMemberName(uid) {
            return this.$store.state.members.availableUsers.filter(member => member.uid === uid).map(user => user.alias && user.alias !== '' ? user.alias:user.name)[0];
          },
          dateFormat(date) {
            let month = '' + (date.getMonth() + 1), day = '' + date.getDate(), hour = '' + date.getHours(), mins = '' + date.getMinutes();
            if (mins.length < 2) mins = '0' + mins;
            return [[month, day].join('/'),[hour, mins].join(':')].join(' ');
          },
          dateFormatNoTime(date) {
            let month = '' + (date.getMonth() + 1), day = '' + date.getDate();
            return [month, day].join('/');
          },
          openUserModal(user) {
            if (this.$store.getters['members/filteredSelf'].isAdmin === true) {
              this.otherUid = user.uid;
              this.holidayStart = user.holidayStart ? user.holidayStart.toDate() : null;
              this.holidayEnd = user.holidayEnd ? user.holidayEnd.toDate() : null;
              this.userMessage = user.message ? user.message : '';
              this.userAlias = user.alias ? user.alias : '';
              this.userKanaName = user.kanaName ? user.kanaName : '';
              this.userBirthDay = user.birthday ? user.birthday : '';
              this.deskNumber = user.currentDeskNumber ? user.currentDeskNumber : '';
              this.$bvModal.show('admin-edit')
            } else {
              this.otherUid = user.uid;
              this.$bvModal.show('other-link');
            }
          },
          async inOffice() {
            await this.$store.dispatch('user/setUserFirebaseEntry', {uid: this.otherUid, inOffice: true, deskNumber: this.deskNumber});
            this.$nextTick(() => {
              this.$bvModal.hide('admin-edit');
            });
          },
          async outOfOffice() {
            await this.$store.dispatch('user/setUserFirebaseEntry', {uid: this.otherUid, inOffice: false});
            this.$nextTick(() => {
              this.$bvModal.hide('admin-edit');
            });
          },
          async quickMessage(statusMessage) {
            try {
              await this.$store.dispatch('user/setUserFirebaseEntry', {uid: this.otherUid, message: statusMessage});
              this.$nextTick(() => {
                this.$bvModal.hide('admin-edit');
              });
              this.$bvToast.toast('ステータスメッセージを更新しました。', {
                title: '完了',
                toaster: 'b-toaster-top-center',
                variant: 'success',
                autoHideDelay: 3000
              });
            } catch(error) {
              try {
                this.$fireAnalytics.logEvent('error', { name: 'user_set_quick_break_message', trace: error});
              } catch (error) {
                this.$bvToast.toast('Firebase Connection Error. Please Reload.\n'+error, {
                  title: 'エラー',
                  toaster: 'b-toaster-top-center',
                  variant: 'danger',
                  autoHideDelay: 3000
                });
              }
              this.$bvToast.toast('ステータスメッセージを更新出来ませんでした。\n'+error, {
                title: 'エラー',
                toaster: 'b-toaster-top-center',
                variant: 'danger',
                autoHideDelay: 3000
              });
            }
          },
          async handleCapturePic() {
            try {
              await this.cameraCapture();
            } catch (error) {
              try {
                this.$fireAnalytics.logEvent('error', { name: 'user_handle_manual_photo_capture', trace: error});
              } catch (error) {
                this.$bvToast.toast('Firebase Connection Error. Please Reload.\n'+error, {
                  title: 'エラー',
                  toaster: 'b-toaster-top-center',
                  variant: 'danger',
                  autoHideDelay: 3000
                });
              }
              this.$bvToast.toast('カメラ画像取得に失敗しました。\n'+error, {
                title: 'エラー',
                toaster: 'b-toaster-top-center',
                variant: 'danger',
                autoHideDelay: 3000
              });
            }
          },
          handleOtherOk(bvModalEvt) {
            bvModalEvt.preventDefault();
            try {
              this.$nextTick(() => {
                this.$bvModal.hide('other-link');
              });
            } catch(error) {
              try {
                this.$fireAnalytics.logEvent('error', { name: 'user_handle_other_modal', trace: error});
              } catch (error) {
                this.$bvToast.toast('Firebase Connection Error. Please Reload.\n'+error, {
                  title: 'エラー',
                  toaster: 'b-toaster-top-center',
                  variant: 'danger',
                  autoHideDelay: 3000
                });
              }
              this.$bvToast.toast('クリックイベントを失敗しました。\n'+error, {
                title: 'エラー',
                toaster: 'b-toaster-top-center',
                variant: 'danger',
                autoHideDelay: 3000
              });
            }
          },
          handleAdminOk(bvModalEvt) {
            bvModalEvt.preventDefault();
            this.handleAdminSubmit();
          },
          async handleAdminSubmit() {
            try {
              if (this.holidayStart) {
                if (this.$store.getters\['members/filteredOther'\](this.otherUid).holidayStart) {
                  if (this.holidayStart !== this.$store.getters\['members/filteredOther'\](this.otherUid).holidayStart.toDate()) {
                    await this.$store.dispatch('user/setUserFirebaseEntry', {
                      uid: this.otherUid,
                      holidayStart: this.$fireStoreObj.Timestamp.fromDate(new Date(this.holidayStart))
                    })
                  }
                } else {
                  await this.$store.dispatch('user/setUserFirebaseEntry', {
                    uid: this.otherUid,
                    holidayStart: this.$fireStoreObj.Timestamp.fromDate(new Date(this.holidayStart))
                  })
                }
              }
              if (this.holidayEnd) {
                if (this.$store.getters\['members/filteredOther'\](this.otherUid).holidayEnd) {
                  if (this.holidayEnd !== this.$store.getters\['members/filteredOther'\](this.otherUid).holidayEnd.toDate()) {
                    await this.$store.dispatch('user/setUserFirebaseEntry', {
                      uid: this.otherUid,
                      holidayEnd: this.$fireStoreObj.Timestamp.fromDate(new Date(this.holidayEnd))
                    })
                  }
                } else {
                  await this.$store.dispatch('user/setUserFirebaseEntry', {
                    uid: this.otherUid,
                    holidayEnd: this.$fireStoreObj.Timestamp.fromDate(new Date(this.holidayEnd))
                  })
                }
              }
    
              if (this.deskNumber !== this.$store.getters\['members/filteredOther'\](this.otherUid).currentDeskNumber) {
                await this.$store.dispatch('user/setUserFirebaseEntry', {
                  uid: this.otherUid,
                  currentDeskNumber: this.deskNumber
                })
              }
    
              if (this.userAlias !== this.$store.getters\['members/filteredOther'\](this.otherUid).alias || this.userMessage !== this.$store.getters\['members/filteredOther'\](this.otherUid).message || this.userKanaName !== this.$store.getters\['members/filteredOther'\](this.otherUid).kanaName) {
                await this.$store.dispatch('user/setUserFirebaseEntry', {
                  uid: this.otherUid,
                  message: this.userMessage,
                  alias: this.userAlias,
                  kanaName: this.userKanaName
                })
              }
    
              if (this.userBirthDay !== this.$store.getters\['members/filteredOther'\](this.otherUid).birthday) {
                await this.$store.dispatch('user/setUserFirebaseEntry', {
                  uid: this.otherUid,
                  birthday: this.userBirthDay
                })
              }
    
              this.$nextTick(() => {
                this.$bvModal.hide('admin-edit')
              })
              this.$bvToast.toast('ユーザー情報を更新しました。', {
                title: '完了',
                toaster: 'b-toaster-top-center',
                variant: 'success',
                autoHideDelay: 3000
              })
            } catch (error) {
              try {
                this.$fireAnalytics.logEvent('error', { name: 'user_handle_admin_edit_modal', trace: error })
              } catch (error) {
                this.$bvToast.toast('Firebase Connection Error. Please Reload.\n' + error, {
                  title: 'エラー',
                  toaster: 'b-toaster-top-center',
                  variant: 'danger',
                  autoHideDelay: 3000
                })
              }
              this.$bvToast.toast('クリックイベントを失敗しました。\n' + error, {
                title: 'エラー',
                toaster: 'b-toaster-top-center',
                variant: 'danger',
                autoHideDelay: 3000
              })
            }
          },
          openChat(chatid) {
            this.$refs.chatComponent.openChatRoom(chatid);
            this.$refs.chatComponent.openChatLog();
          },
          async createOrOpenPairedChat(uid) {
            try {
              const chatIndex = this.$store.state.chatrooms.availableChats.findIndex(chatroom => (chatroom.chatusers.length === 2 && chatroom.chatusers.includes(uid) && chatroom.chatusers.includes(this.$store.state.user.uid) && chatroom.chatadmin.includes(this.$store.state.user.uid)));
              if (chatIndex === -1) {
                const chatid = await this.$store.dispatch('chatrooms/createNewChatParam', {
                  chatusers: [uid, this.$store.state.user.uid],
                  chatname: [uid, this.$store.state.user.uid].map(user => this.uidToMemberName(user)).join(','),
                  chatadmin: [uid, this.$store.state.user.uid],
                });
                this.$store.commit('chatrooms/setCurrentChatId', chatid);
                this.$nextTick(() => {
                  this.$bvModal.hide('other-link');
                  this.$bvModal.hide('admin-edit');
                  this.$refs.chatComponent.openChatRoom(chatid);
                  this.$refs.chatComponent.openChatLog();
                });
              } else {
                const chatid = this.$store.state.chatrooms.availableChats[chatIndex].chatid;
                this.$nextTick(() => {
                  this.$bvModal.hide('other-link');
                  this.$bvModal.hide('admin-edit');
                  this.$refs.chatComponent.openChatRoom(chatid);
                  this.$refs.chatComponent.openChatLog();
                });
              }
            } catch (error) {
              console.log(error);
              try {
                this.$fireAnalytics.logEvent('error', { name: 'user_open_direct_chat', trace: error});
              } catch (error) {
                this.$bvToast.toast('Firebase Connection Error. Please Reload.\n'+error, {
                  title: 'エラー',
                  toaster: 'b-toaster-top-center',
                  variant: 'danger',
                  autoHideDelay: 3000
                });
              }
              this.$bvToast.toast('User Chat Error\n'+error, {
                title: 'エラー',
                toaster: 'b-toaster-top-center',
                variant: 'danger',
                autoHideDelay: 3000
              });
            }
          },
          async sendThankYou(uid) {
            try {
              await this.$store.dispatch('thankYous/createThankYou', {recipientUid: uid, fromUid: this.$fireAuth.currentUser.uid, timestamp: this.$fireStoreObj.Timestamp.fromDate(new Date())});
              this.$nextTick(() => {
                this.$bvModal.hide('other-link');
                this.$bvModal.hide('admin-edit');
                this.$bvToast.toast((this.uidToMemberName(uid)+'さんに「Thank You」を送りました！'), {
                  title: '「Thank You」を送りました！',
                  toaster: 'b-toaster-top-center',
                  variant: 'success',
                  autoHideDelay: 3000
                });
              });
            } catch(error) {
              try {
                this.$fireAnalytics.logEvent('error', { name: 'send_thank_you', trace: error});
              } catch (error) {
                this.$bvToast.toast('Firebase Connection Error. Please Reload.\n'+error, {
                  title: 'エラー',
                  toaster: 'b-toaster-top-center',
                  variant: 'danger',
                  autoHideDelay: 3000
                });
              }
              this.$bvToast.toast('「Thank You」を送信できませんでした。\n'+error, {
                title: 'エラー',
                toaster: 'b-toaster-top-center',
                variant: 'danger',
                autoHideDelay: 3000
              });
            }
          },
          async cameraCapture() {
            try {
              if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
                let constraints;
                let hasAvailableSourceFlag = false;
                let src = '';
                if (this.$store.getters['members/filteredSelf'].defaultSource) {
                  // Check for User Src
                  src = this.$store.getters['members/filteredSelf'].defaultSource;
                  let sources = await navigator.mediaDevices.enumerateDevices();
    
                  for (let device of sources) {
                    if (device.kind === 'videoinput') {
                      if (device.deviceId ===  src) {
                        hasAvailableSourceFlag = true;
                      }
                    }
                  }
    
                  if (!hasAvailableSourceFlag) {
                    await this.$store.dispatch('user/setUserFirebaseEntry', {uid: this.$fireAuth.currentUser.uid, defaultSource: null});
                  }
                }
    
                if (hasAvailableSourceFlag) {
                  constraints = {
                    video: {
                      deviceId: src,
                      aspectRatio: 1
                    },
                    audio: false
                  };
                } else {
                  constraints = {
                    video: {
                      aspectRatio: 1
                    },
                    audio: false
                  };
                }
    
                this.video = this.$refs.video;
                this.video.srcObject = await navigator.mediaDevices.getUserMedia(constraints);
    
                setTimeout(async () => {
                  try {
                    await this.video.play();
                    this.canvas = this.$refs.canvas;
                    let context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 240, 240);
                    const imgfile = this.canvas.toDataURL("image/jpeg", 1.00);
                    const blobBin = atob(imgfile.split(',')[1]);
                    let array = [];
                    for(let i = 0; i < blobBin.length; i++) {
                      array.push(blobBin.charCodeAt(i));
                    }
                    let blob = new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
                    this.$store.dispatch('user/setUserPicture',{uid: this.$fireAuth.currentUser.uid,file: blob});
                    // Need this for destroy object?
                    this.video.srcObject.getTracks().forEach(function(track) {
                      track.stop();
                    });
                    this.video.srcObject = null;
                    this.video = {};
                  } catch (error) {
                    try {
                      this.$fireAnalytics.logEvent('error', { name: 'user_picture_taking', trace: error});
                    } catch (error) {
                      this.$bvToast.toast('Could Not Take Snapshot.\n'+error, {
                        title: 'エラー',
                        toaster: 'b-toaster-top-center',
                        variant: 'danger',
                        autoHideDelay: 3000
                      });
                    }
                  }
                }, 2000);
              } else {
                this.$bvToast.toast('No Video Feed Available.', {
                  title: 'エラー',
                  toaster: 'b-toaster-top-center',
                  variant: 'danger',
                  autoHideDelay: 3000
                });
              }
            } catch (error) {
              try {
                this.$fireAnalytics.logEvent('error', { name: 'user_camera_setup', trace: error});
              } catch (error) {
                this.$bvToast.toast('Firebase Connection Error. Please Reload.\n'+error, {
                title: 'エラー',
                  toaster: 'b-toaster-top-center',
                  variant: 'danger',
                  autoHideDelay: 3000
              });
              }
              this.$bvToast.toast('再度ログインしてください。\n'+error, {
                title: 'エラー',
                toaster: 'b-toaster-top-center',
                variant: 'danger',
                autoHideDelay: 3000
              });
            }
          },
          async loadCameraLoop() {
            if (this.camera_interval !== '') {
              window.clearInterval(this.camera_interval);
            }
            await this.cameraCapture();
            this.camera_interval = window.setInterval(async () => {
              try {
                await this.cameraCapture();
              } catch (error) {
                console.log(error);
                try {
                  this.$fireAnalytics.logEvent('error', { name: 'user_camera_loop', trace: error});
                } catch (error) {
                  this.$bvToast.toast('Firebase Connection Error. Please Reload.\n'+error, {
                    title: 'エラー',
                    toaster: 'b-toaster-top-center',
                    variant: 'danger',
                    autoHideDelay: 3000
                  });
                }
                await this.loadCameraLoop();
              }
            }, 120000);
          },
        },
        async mounted() {
          if (this.$store.state.members.listenerUnsubscribe === null) {
            this.$store.dispatch('members/getUsers', this);
          }
          if (this.$store.state.calendar.calendarsListener === null) {
            this.$store.dispatch('calendar/getAllCalendars', this);
          }
          setTimeout(async () => {
            await this.loadCameraLoop();
          }, 2000);
        },
        beforeDestroy() {
          if (this.camera_interval !== '') {
            window.clearInterval(this.camera_interval);
          }
        }
      }
    </script>
    
    <style scoped>
      .page-wrap {
        display: flex;
        flex-flow: row nowrap;
      }
    
      .sidebar-wrap {
        flex: 0 1 25%;
        max-width: 260px;
        height: 100%;
        border-right: 1px solid rgba(0, 0, 0, 0.125);
        min-height: calc(100vh - 71px);
        max-height: calc(100vh - 71px);
        overflow-y: auto;
      }
    
      .main-wrap {
        position: relative;
        width: 100%;
        height: calc(100vh - 71px);
      }
    
      .main-content-wrap {
        overflow-x: hidden;
        overflow-y: auto;
        height: 100%;
        max-height: calc(100vh - 71px);
      }
    
      .content-section {
        margin-bottom: 16px;
      }
    
      .content-header {
        width: 100%;
        padding: 0 8px;
        margin-bottom: 8px;
      }
    
      .user-wrap {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: baseline;
        align-content: baseline;
        margin: 0 4px;
      }
    
      .user {
        width: 10%;
        padding: 0 4px 8px;
      }
    
      .office-title {
        font-size: 24px;
        margin: 0;
      }
    
      .user-icon {
        position: relative;
      }
    
      .user-icon img {
        width: 100%;
        height: auto;
        position: absolute;
        bottom: 0;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        transform: translate(-50%,0);
      }
    
      .calendar-wrapper {
        display: inline-block;
        margin: 0;
        color: #fff;
        line-height: 1;
      }
    
      .calendar_icon {
        padding: 5px;
      }
    
      .calendar_icon__inner {
        background: #007bff;
        border-radius: 30px;
        padding: 8px;
      }
    
      .birthday_icon {
        padding: 5px;
      }
    
      .birthday_icon__inner{
        background-color: #FF487D;
        border-radius: 30px;
        padding: 8px;
      }
    
      .wrapper {
        display: flex;
        flex-direction: row-reverse;
        position: absolute;
        padding:  0px;
        right:  3px;
        top: 3px;
        z-index: 1;
      }
    
      .user-icon:before {
        content: "";
        display: block;
        padding-top: 100%;
      }
    
      .user-icon__details {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: inline-block;
        color: #fff;
        margin: 0;
        line-height: 1;
        left: 0;
        text-align: center;
      }
    
      .user-icon__details__timestamp {
        width: 100%;
        text-align: left;
        margin: 2px;
        font-size: 10px;
      }
    
      .timestamp__green {
        margin-right: 2px;
        height: 6px;
        width: 6px;
        background-color: #00fd4c;
        border-radius: 50%;
        display: inline-block;
      }
    
      .user-icon__details__user-name {
        background: rgba(0,0,0,0.56863);
        width: 100%;
        margin: 0;
        padding: 4px 0;
        font-size: 14px;
      }
    
      .message__details {
        position: absolute;
        overflow: hidden;
        height: 100%;
        width: 100%;
        display: inline-block;
        background: rgba(0,0,0,0.56863);
        color: #fff;
        margin: 0;
        line-height: 1;
        left: 0;
        bottom: 0;
        padding: 2px;
      }
    
      .message__details__body {
        background: #fff;
        overflow: auto;
        color: #000;
        width: 100%;
        height: 100%;
        border: 1px dashed #666;
        padding: 4px;
      }
    
      .message__details__body__exit {
        position: absolute;
        top: 1px;
        right: 1px;
      }
    
      .message__details__body__user-name {
        font-size: 14px;
      }
    
      .teledesk-display {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        font-size: 14px;
        color: #fff;
      }
    
      .desk-number {
        flex: 0 1 auto;
        display: inline-flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 0 4px;
        margin-top: 1px;
        background: #007bff;
      }
    
      .tel-number {
        flex: 0 1 auto;
        display: inline-flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 0 4px;
        margin-top: 1px;
        background: #dc3545;
      }
    
      .hidden {
        display: none;
      }
    
      .admin-buttons {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 998;
      }
    
      .admin-buttons-wrap {
        position: relative;
        display: inline-block;
      }
    
      .admin_modal_button {
        border-radius: 50%;
        background: #007bff;
        color: #fff;
        line-height: 30px;
        font-size: 20px;
        width: 50px;
      }
    
      .admin_modal_button__inner {
        position: relative;
        text-align: center;
        padding: 10px;
      }
    
      .floorguide img, .lightguide img {
        width: 100%;
      }
    
      .monthly-birthday-wrapper {
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        margin: 0 8px 16px;
        padding: 8px;
        background-color: #fff;
      }
    
      .birthday-user-wrapper {
        display: flex;
        flex-flow: column;
        align-items: center;
      }
    
      .birthday-user {
        width: 100%;
      }
    
      .user-birthday {
        padding-left: 100px;
        font-size: 22px;
      }
    
      .cake {
        color: #FF487D;
      }
    
      .birthday-title {
        text-align: center;
      }
      .birthday-count {
        text-align: center;
        padding-top: 5px;
      }
    
      .member-pin {
        position: absolute;
        top: -10px;
        left: -3px;
        color: #ffc107;
        font-size:1.5em;
        border-style: solid;
        border-color: #fff;
      }
    </style>
## members/index.js
    import moment from 'moment';
    
    export const state = () => ({
      availableUsers: [],
      listenerUnsubscribe: null,
    });
    
    export const getters = {
      filteredOther: (state) => (id) => {
        let user = state.availableUsers.filter((element) => {
          return element.uid === id;
        });
    
        return user[0];
      },
      getCurrentMonthUserBirthday(state, getters, rootState) {
        const birthdayUsers = state.availableUsers.filter(member => (member.birthday && member.birthday !== '')).map(member => (member.alias && member.alias !== '') ? {name: member.alias, birthday:member.birthday}:{name: member.name, birthday:member.birthday});
    
        const month = moment().format('MM');
        return birthdayUsers.filter(member => (month === moment(member.birthday).format('MM'))).sort((a, b) => (moment(a.birthday).format('DD') > moment(b.birthday).format('DD')) ? 1 : -1);
      },
      getCurrentUserBirthday: (state) => (id) => {
        let currentUser = state.availableUsers.find(user => user.uid === id);
        if (!currentUser || !currentUser.birthday) {
          return false;
        }
    
        let birthday = currentUser.birthday;
    
        const today = moment().format('MM-DD');
        birthday = moment(birthday).format('MM-DD');
    
        if (today === birthday) {
          return birthday;
        }
    
        return false;
      },
      sortedUsers(state, getters, rootState) {
        const sorted = {};
        sorted.offline = state.availableUsers.filter((user) => {
          if (user.loggedIn === false) {
            return user;
          }
        });
        const currentUser = state.availableUsers.filter((user) => {
          if (user.uid === rootState.user.uid) {
            return user;
          }
        });
        const otherOnline = state.availableUsers.filter((user) => {
          if (user.uid !== rootState.user.uid && !sorted.offline.includes(user)) {
            return user;
          }
        });
        sorted.online = [...currentUser, ...otherOnline];
        return sorted;
      },
      filteredInOffice(state, getters, rootState) {
        const pinned = state.availableUsers.filter((user) => {
          if (user.loggedIn !== false && user.uid === rootState.user.uid) {
            return user;
          }
        });
    
        console.log('self : ' + $store.getters['members/filteredSelf'])
    
        const filtered = state.availableUsers.filter((user) => {
          if (user.loggedIn === true) {
            if (user.inOffice === undefined || user.inOffice === true) {
    
              if (pinned.includes(user.name)) {
                console.log(true)
    
              }
              user.isPinned = true
              console.log(user);
              return user;
            }
          }
        });
        return filtered.filter((user) => {
          if (user.uid !== rootState.user.uid) {
            return user;
          }
        });
      },
      filteredOutOfOffice(state, getters, rootState) {
        const filtered = state.availableUsers.filter((user) => {
          if (user.loggedIn === true) {
            if (user.inOffice !== undefined && user.inOffice === false) {
              return user;
            }
          }
        });
        return filtered.filter((user) => {
          if (user.uid !== rootState.user.uid) {
            return user;
          }
        });
      },
      filteredHoliday(state, getters, rootState) {
        return state.availableUsers.filter((user) => {
          if (user.loggedIn === false) {
            if (user.holidayStart && user.holidayEnd) {
              if (Date.now() >= user.holidayStart.toDate() && Date.now() <= user.holidayEnd.toDate()) {
                return user;
              }
            }
          }
        });
      },
      filteredOffline(state, getters, rootState) {
        return state.availableUsers.filter((user) => {
          if (user.loggedIn === false) {
            if (user.holidayStart && user.holidayEnd) {
              if (Date.now() < user.holidayStart.toDate() || Date.now() > user.holidayEnd.toDate()) {
                return user;
              }
            } else {
              return user;
            }
          }
        });
      },
      filteredSelf(state, getters, rootState) {
        const filtered = state.availableUsers.filter((user) => {
          if (user.loggedIn !== false && user.uid === rootState.user.uid) {
            return user;
          }
        });
    
        if (filtered.length > 0) {
          return filtered[0]
        } else {
          return {
            uid: '',
            loggedIn: '',
            name: '',
            alias: '',
            email: '',
            photoUrl: '',
            taken: '',
            message: '',
            defaultIcon: '',
            fcmToken: '',
            inOffice: '',
            currentDeskNumber: '',
            isAdmin: false,
            isDev: false,
            holidayStart: '',
            holidayEnd: '',
            chatworkId: '',
            defaultSource: '',
            birthday: ''
          }
        }
      }
    };
    
    export const mutations = {
      setAvailableUsers(state, value) {
        state.availableUsers = value;
      },
      SET_LISTENER_UNSUBSCRIBE(state, val) {
        state.listenerUnsubscribe = val;
      },
      RESET_STORE(state) {
        state.listenerUnsubscribe();
        state.listenerUnsubscribe = null;
      },
    };
    
    export const actions = {
      getUsers({ state, commit }, { vm }) {
        const unsubscribe = this.$fireStore.collection('users')
          .onSnapshot((querySnapshot) => {
            let users = [];
            querySnapshot.forEach(function(doc) {
                users.push({
                  uid: doc.id,
                  loggedIn: doc.data().loggedIn,
                  name: doc.data().name,
                  alias: doc.data().alias,
                  kanaName: doc.data().kanaName,
                  email: doc.data().email,
                  photoUrl: doc.data().photoUrl,
                  taken: doc.data().taken,
                  message: doc.data().message,
                  defaultIcon: doc.data().defaultIcon,
                  fcmToken: doc.data().fcmToken,
                  inOffice: doc.data().inOffice,
                  currentDeskNumber: doc.data().currentDeskNumber,
                  isAdmin: doc.data().isAdmin,
                  isDev: doc.data().isDev,
                  holidayStart: doc.data().holidayStart,
                  holidayEnd: doc.data().holidayEnd,
                  chatworkId: doc.data().chatworkId,
                  defaultSource: doc.data().defaultSource,
                  birthday: doc.data().birthday,
                  pinnedMembers: doc.data().pinnedMembers,
                });
              },
              (error) => {
                vm.$bvToast.toast('データベースエラー\n'+error, {
                  title: 'エラー',
                  toaster: 'b-toaster-top-center',
                  variant: 'danger',
                  autoHideDelay: 3000
                });
              }
            );
            commit('setAvailableUsers',users)
          });
        commit('SET_LISTENER_UNSUBSCRIBE', unsubscribe);
      },
      resetUserList({ state, commit }) {
        if (state.listenerUnsubscribe !== null) {
          commit('RESET_STORE');
        }
        commit('setAvailableUsers', []);
      }
    };


## user/index.js
    export const state = () => ({
      loggedIn: false,
      uid: null,
      displayName: null,
      email: null,
      google_token: null
    });
    
    export const getters = {};
    
    export const mutations = {
      setLoggedInStatus(state, value) {
        state.loggedIn = value;
      },
      setUserProps(state, userObj) {
        state.uid = userObj.uid;
        state.displayName = userObj.displayName;
        state.email = userObj.email;
      },
      setGoogleToken(state, token) {
        state.google_token = token;
      },
      resetUserProps(state) {
        state.uid = null;
        state.displayName = null;
        state.email = null;
      }
    };
    
    export const actions = {
      async setUserFirebaseEntry({ commit, state, rootState }, parameters) {
        try {
          const userRef = this.$fireStore.collection('users').doc(parameters.uid);
          await userRef.set(parameters, {merge: true});
        } catch (error) {
          try {
            this.$fireAnalytics.logEvent('error', { name: 'set_user_update', trace: error});
          } catch (error) {
            // Pass?
          }
          console.error("Error writing to document: ", error);
        }
      },
      async setUserPicture({ dispatch, commit, state, rootState }, parameters) {
        try {
          const file = parameters.file;
          const metadata = { contentType: 'image/jpeg' };
          await this.$fireStorage.ref().child('images/' + parameters.uid).put(file, metadata);
          const date = this.$fireStoreObj.Timestamp.fromDate(new Date());
          const downloadURL = await this.$fireStorage.ref().child('images/' + parameters.uid).getDownloadURL();
          dispatch('setUserFirebaseEntry', {loggedIn: true, uid: state.uid, photoUrl: downloadURL, taken: date});
        } catch (error) {
          console.error("Error uploading photo: ", error);
        }
      },
      async deleteUserPicture({ commit, state, rootState }, userId) {
        try {
          await this.$fireStorage.ref().child('images/' + userId).delete();
          console.log('Successfully Deleted Photo');
        } catch (error) {
          console.error("Error deleting photo: ", error);
        }
      },
      async loginSetup({ dispatch, commit, state, rootState }) {
        try {
          let provider = new this.$fireAuthObj.GoogleAuthProvider();
          provider.addScope('https://www.googleapis.com/auth/calendar');
          let user = await this.$fireAuth.signInWithPopup(provider);
          // if (!this.$fireAuth.currentUser.emailVerified || (this.$fireAuth.currentUser.email.split('@')[1] !== 'preapp.jp' && this.$fireAuth.currentUser.email !== 'avjhirota@gmail.com')) {
          if (!this.$fireAuth.currentUser.emailVerified) {
            console.log('Unauthorized User.');
            await this.$fireAuth.signOut();
            return false;
          }
          commit('setLoggedInStatus', true);
          commit('setUserProps', this.$fireAuth.currentUser);
          commit('setGoogleToken', user.credential.accessToken);
          await dispatch('setUserFirebaseEntry', {
            loggedIn: true,
            uid: this.$fireAuth.currentUser.uid,
            name: this.$fireAuth.currentUser.displayName,
            email: this.$fireAuth.currentUser.email,
            defaultIcon: this.$fireAuth.currentUser.photoURL,
            message: ""
          });
          return true;
        } catch (error) {
          console.error("Error logging in: ", error);
        }
      },
      async getGoogleCalendar({ dispatch, commit, state, rootState }) {
        try {
          await dispatch('calendar/deleteCalendar', this.$fireAuth.currentUser.uid, {root: true})
          let provider = new this.$fireAuthObj.GoogleAuthProvider();
          provider.addScope('https://www.googleapis.com/auth/calendar');
          let user = await this.$fireAuth.signInWithPopup(provider);
          let ts = new Date();
          let year = ''+ts.getFullYear();
          let month = ''+(ts.getMonth()+1);
          let day = ''+ts.getDate();
          if (month.length < 2) {
            month = '0'+month;
          }
          if (day.length < 2) {
            day = '0'+day;
          }
          let tsMin = [year,month,day].join('-')+'T00:00:00Z';
          ts = new Date(ts.setDate(ts.getDate() + 1));
          year = ''+ts.getFullYear();
          month = ''+(ts.getMonth()+1);
          day = ''+ts.getDate();
          if (month.length < 2) {
            month = '0'+month;
          }
          if (day.length < 2) {
            day = '0'+day;
          }
          let tsMax = [year,month,day].join('-')+'T23:59:59Z';
          let googleCal = await this.$axios.get('https://www.googleapis.com/calendar/v3/calendars/'+this.$fireAuth.currentUser.email+'/events?singleEvents=true&showDeleted=true&timeMin='+tsMin+'&timeMax='+tsMax,{headers: {'Authorization': 'Bearer ' + user.credential.accessToken}});
          commit('setGoogleToken', user.credential.accessToken);
          for (const item of googleCal.data.items) {
            if (item.status !== "cancelled") {
              if (item.start && item.start.dateTime) {
                if ((new Date(item.end.dateTime).getTime() - new Date(item.start.dateTime).getTime()) < 28800000) {
                  let event = {status: item.status, start: item.start, end: item.end, summary: item.summary, id: item.id};
                  await dispatch('calendar/createCalendarEvent', {
                    calendarid: this.$fireAuth.currentUser.uid,
                    parameters: event
                  }, {root: true});
                }
              }
            }
          }
          // console.log('Cancelled Events');
          // googleCal.data.items.forEach(item => {
          //   if (item.status === "cancelled") {
          //     let event = {status: item.status, start: item.start, summary: item.summary, id: item.id};
          //     console.log(event);
          //   }
          // });
        } catch (error) {
          console.error("Error getting user Calendar: ", error);
        }
      },
      async logoutCleanup({ dispatch, commit, state, rootState }) {
        try {
          await dispatch('deleteUserPicture', state.uid);
          await dispatch('setUserFirebaseEntry', {loggedIn: false, uid: state.uid, photoUrl: ''});
          await this.$fireAuth.signOut();
          commit('setLoggedInStatus', false);
          commit('resetUserProps');
        } catch (error) {
          console.error("Error logging out: ", error);
        }
      },
    };

