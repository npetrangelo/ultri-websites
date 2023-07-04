<template>
  <q-dialog>
    <q-card>
      <q-bar>
        <span v-if="$q.screen.lt.md">GCC</span><span v-else>Ultri Co-op</span>

        <q-space></q-space>

        <q-btn icon="close" round dense v-close-popup></q-btn>
      </q-bar>
      <q-card-section>
        <div class="text-body1 text-weight-medium q-px-md col eventPopup">
          {{ event.title }}
        </div>
        <hr />
        <div class="q-px-md col" v-if="event.allDay == 'FALSE'">
          <span class="text-weight-medium">Start:</span>
          {{ dateTimeStr(event.start) }} CDST
        <div class="q-px-md col" v-if="event.allDay == 'FALSE'">
          <span class="text-weight-medium">End:</span>
          {{ dateTimeStr(event.end) }} CDST
        </div>
        <div class="q-px-md col" v-if="event.allDay == 'TRUE'">
          <span class="text-weight-medium">All Day:</span>
          {{ dateStr(event.date) }}
        </div>
        <hr />
        <div class="q-px-md col">
          <span class="text-weight-medium">Location:</span>
          {{ event.location }}
        </div>
        <hr />
        <div class="q-px-md col" v-html="event.details"></div>
      </q-card-section>
      <q-card-actions class="text-center justify-center">
        <q-btn-dropdown color="primary" label="Add to Calendar" icon="mdi-calendar">
          <q-list>
            <q-item clickable v-close-popup :href="getEmailLink('google')"  target="_blank">
              <q-item-section>
                <q-item-label>Google</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup :href="getEmailLink('outlook')"  target="_blank">
              <q-item-section>
                <q-item-label>Outlook</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup :href="getEmailLink('office365')"  target="_blank">
              <q-item-section>
                <q-item-label>Office 365</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup :href="getEmailLink('yahoo')"  target="_blank">
              <q-item-section>
                <q-item-label>Yahoo</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup :href="getEmailLink('ics')" target="_blank">
              <q-item-section>
                <q-item-label>Download .ics file</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";

import { useQuasar } from 'quasar'

import { parseTimestamp } from "@quasar/quasar-ui-qcalendar";
import { google, outlook, office365, yahoo, ics } from "calendar-link";

export default defineComponent({
  name: "CalendarEventDialog",
  components: {},
  props: ["event"],
  setup(props, { emit }) {
    console.log(props);

    const $q = useQuasar()

    const dateTimeStr = (dateTime) => {
      const options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      const date = new Date(dateTime);
      return (
        date.toLocaleDateString("us-EN", options) +
        " " +
        date.toLocaleTimeString("us-EN", { timeStyle: "short" })
      );
    };

    const dateStr = (dateIn) => {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      const date = new Date(dateIn);
      return date.toLocaleDateString("us-EN", options);
    };

    const getEmailLink = (target) => {
      const startDate = new Date(props.event.start);

      let event;

      if (props.event.allDay == "TRUE") {
        event = {
          title: props.event.title,
          description: props.event.details,
          allDay: true,
        };
      } else {
        event = {
          title: props.event.title,
          description: props.event.details,
          start: startDate,
          duration: [props.event.duration, "minute"],
        };
      }

      let link;

      switch (target) {
        case "google":
          link = google(event);
          break;
        case "outlook":
          link = outlook(event);
          break;
        case "office365":
          link = office365(event);
          break;
        case "yahoo":
          link = yahoo(event);
          break;
        case "ics":
          link = ics(event);
          break;
      }

      return link;
    };

    return {
      dateTimeStr,
      dateStr,
      getEmailLink,
    };
  },
});
</script>

<style scoped>
.eventPopup {
  min-width: 250px;
}
.date-head {
  font-size: 1.3em;
  font-style: italic;
}
</style>
