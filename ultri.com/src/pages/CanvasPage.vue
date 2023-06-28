<template>
  <q-page class="flex justify-center outer-container">
    <!-- THIS DIV IS VISIBLE ON A X-SMALL SCREEN (class=xs)-->
    <div class="xs row full-width">
      <div class="row full-width">
        <div class="row full-width key-activities" style="height: 11%">
          <div class="row full-width key-resources">
            <div class="row full-width">
              <div class="col key-partners">X-SMALL Key Partners</div>
            </div>
          </div>
        </div>

        <div class="row full-width key-activities" style="height: 11%">
          <div class="row full-width key-resources">
            <div class="row full-width">
              <div class="row full-width key-activities">Key Activities</div>
            </div>
          </div>
        </div>

        <div class="row full-width key-activities" style="height: 11%">
          <div class="row full-width key-resources">
            <div class="row full-width">
              <div class="row full-width key-resources">Key Resources</div>
            </div>
          </div>
        </div>

        <div class="row full-width key-activities" style="height: 11%">
          <div class="row full-width key-resources">
            <div class="row full-width">
              <div class="col value-propositions">Value Propositions</div>
            </div>
          </div>
        </div>

        <div class="row full-width key-activities" style="height: 11%">
          <div class="row full-width key-resources">
            <div class="row full-width">
              <div class="row customer-relationships full-width key-activities">
                Customer Relationships
              </div>
            </div>
          </div>
        </div>

        <div class="row full-width key-activities" style="height: 11%">
          <div class="row full-width key-resources">
            <div class="row full-width">
              <div class="row channels full-width key-resources">Channels</div>
            </div>
          </div>
        </div>

        <div class="row full-width key-activities" style="height: 11%">
          <div class="row full-width key-resources">
            <div class="row full-width">
              <div class="col customer-segments">Customer Segments</div>
            </div>
          </div>
        </div>

        <div class="row full-width key-activities" style="height: 11%">
          <div class="row full-width key-resources">
            <div class="row full-width">
              <div class="col cost-structure">Cost Structure</div>
            </div>
          </div>
        </div>

        <div class="row full-width key-activities" style="height: 12%">
          <div class="row full-width key-resources">
            <div class="row full-width">
              <div class="col revenue-stream">Revenue Stream</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- THIS DIV IS VISIBLE ON A MEDIUM SCREEN (class=md)-->
    <div class="gt-xs lt-lg row full-width">
      <div class="row full-width">
        <div class="row full-width key-activities" style="height: 33%">
          <div class="row full-width">
            <div class="col key-partners">MEDIUM Key Partners</div>
            <div class="col fit">
              <div class="row fit">
                <div class="row full-width key-activities">Key Activities</div>
                <div class="row full-width key-resources">Key Resources</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row full-width key-resources" style="height: 14%">
          <div class="col value-propositions">Value Propositions</div>
        </div>
        <div class="row full-width key-resources" style="height: 33%">
          <div class="col fit">
            <div class="row fit">
              <div class="row customer-relationships full-width key-activities">
                Customer Relationships
              </div>
              <div class="row channels full-width key-resources">Channels</div>
            </div>
          </div>
          <div class="col customer-segments">Customer Segments</div>
        </div>
        <div class="row full-width key-resources" style="height: 20%">
          <div class="row full-width">
            <div class="col cost-structure">Cost Structure</div>
            <div class="col revenue-stream">Revenue Stream</div>
          </div>
        </div>
      </div>
    </div>
    <!-- THIS DIV IS VISIBLE ON A SCREEN GREATER THAN MEDIUM (class=sm)-->
    <div class="gt-md row full-width">
      <div class="row full-width">
        <div class="row full-width key-activities" style="height: 80%">
          <div class="row full-width">
            <div class="col key-partners q-ma-sm">
              <div class="infobox fit q-pa-sm"> LARGE Key Partners
                </div></div>
            <div class="col fit">
              <div class="row fit">
                <div class="row full-width key-activities">Key Activities</div>
                <div class="row full-width key-resources">Key Resources</div>
              </div>
            </div>

            <div class="col value-propositions">Value Propositions</div>

            <div class="col fit">
              <div class="row fit">
                <div
                  class="row customer-relationships full-width key-activities"
                >
                  Customer Relationships
                </div>
                <div class="row channels full-width key-resources">
                  Channels
                </div>
              </div>
            </div>

            <div class="col customer-segments">Customer Segments</div>
          </div>
        </div>
        <div class="row full-width key-resources" style="height: 20%">
          <div class="row full-width">
            <div class="col cost-structure">Cost Structure</div>
            <div class="col revenue-stream">Revenue Stream</div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import BusinessCanvas from "../components/canvas/BusinessCanvas.vue";
</script>

<style lang="scss">
.infobox {
  border: solid;
  border-color: red;
  border-radius: 1em;
}
.outer-container {
  border-style: double;
}
.outer-card-container {
  border-style: dotted;
}
.card-section-container {
  border-style: dashed;
  border-color: blue;
}
.canvas-container {
  border-style: solid;
  background-color: white;
}
.key-partners {
  color: white;
  background-color: green;
}
.key-resources {
  color: black;
  background-color: yellow;
}
.key-activities {
  color: white;
  background-color: blueviolet;
}
.value-propositions {
  color: black;
  background-color: aqua;
}
.customer-relationships {
  color: black;
  background-color: darkcyan;
}
.channels {
  color: white;
  background-color: orange;
}
.customer-segments {
  color: black;
  background-color: purple;
}
.cost-structure {
  color: white;
  background-color: red;
}
.revenue-stream {
  color: white;
  background-color: green;
}
</style>
