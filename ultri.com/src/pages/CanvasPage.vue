<template>
  <q-page class="flex justify-center outer-container">
    <!-- THIS DIV IS VISIBLE ON A X-SMALL SCREEN (class=xs)-->
    <div class="xs row full-width">
      <div class="row full-width" style="height: 11%">
        <div class="col key-partners q-ma-xs">
          <div class="infobox fit q-pa-xs">X-SMALL Key Partners</div>
        </div>
      </div>
      <div class="row full-width" style="height: 11%">
        <div class="row full-width">
          <div class="col key-activities q-ma-xs">
            <div class="infobox fit q-pa-xs">Key Activities</div>
          </div>
        </div>
      </div>

      <div class="row full-width" style="height: 11%">
        <div class="col key-resources q-ma-xs">
          <div class="infobox fit q-pa-xs">Key Resources</div>
        </div>
      </div>

      <div class="row full-width" style="height: 11%">
        <div class="row full-width">
          <div class="col value-propositions q-ma-xs">
            <div class="infobox fit q-pa-xs">Value Propositions</div>
          </div>
        </div>
      </div>

      <div class="row full-width" style="height: 11%">
        <div class="row full-width">
          <div class="col customer-relationships q-ma-xs">
            <div class="infobox fit q-pa-xs">Customer Relationships</div>
          </div>
        </div>
      </div>

      <div class="row full-width" style="height: 11%">
        <div class="row full-width">
          <div class="row channels full-width key-resources q-ma-xs">
            <div class="infobox fit q-pa-xs">Channels</div>
          </div>
        </div>
      </div>

      <div class="row full-width" style="height: 11%">
        <div class="row full-width">
          <div class="col customer-segments q-ma-xs"><div class="infobox fit q-pa-xs">Customer Segments</div></div>
        </div>
      </div>

      <div class="row full-width" style="height: 11%">
        <div class="row full-width">
          <div class="col cost-structure q-ma-xs"><div class="infobox fit q-pa-xs">Cost Structure</div></div>
        </div>
      </div>

      <div class="row full-width" style="height: 12%">
        <div class="row full-width">
          <div class="col revenue-stream q-ma-xs"><div class="infobox fit q-pa-xs">Revenue Stream</div></div>
        </div>
      </div>
    </div>
    <!-- THIS DIV IS VISIBLE ON A MEDIUM SCREEN (class=md)-->
    <div class="gt-xs lt-lg row full-width">
      <div class="row full-width">
        <div class="row full-width key-activities" style="height: 33%">
          <div class="row full-width">
            <div class="col key-partners q-ma-sm">
              <div class="infobox fit q-pa-sm">MEDIUM Key Partners</div>
            </div>
            <div class="col fit">
              <div class="row fit">
                <div class="row full-width key-activities">
                  <div class="q-pa-sm fit">
                    <div class="infobox fit q-pa-sm">Key Activities</div>
                  </div>
                </div>
                <div class="row full-width key-resources">
                  <div class="q-pa-sm fit">
                    <div class="infobox fit q-pa-sm">Key Resources</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row full-width key-resources" style="height: 14%">
          <div class="col value-propositions q-ma-sm">
            <div class="infobox fit q-pa-sm">Value Propositions</div>
          </div>
        </div>
        <div class="row full-width key-resources" style="height: 33%">
          <div class="col fit">
            <div class="row fit">
              <div class="row customer-relationships full-width key-activities">
                <div class="q-pa-sm fit">
                  <div class="infobox fit q-pa-sm">Customer Relationships</div>
                </div>
              </div>
              <div class="row channels full-width key-resources">
                <div class="q-pa-sm fit">
                  <div class="infobox fit q-pa-sm">Channels</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col customer-segments q-ma-sm">
            <div class="infobox fit q-pa-sm">Customer Segments</div>
          </div>
        </div>
        <div class="row full-width key-resources" style="height: 20%">
          <div class="row full-width">
            <div class="col cost-structure q-ma-sm">
              <div class="infobox fit q-pa-sm">Cost Structure</div>
            </div>
            <div class="col revenue-stream q-ma-sm">
              <div class="infobox fit q-pa-sm">Revenue Stream</div>
            </div>
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
              <div class="infobox fit q-pa-sm">LARGE Key Partners</div>
            </div>
            <div class="col fit">
              <div class="row fit">
                <div class="row full-width key-activities q-ma-sm">
                  <div class="infobox fit q-pa-sm">Key Activities</div>
                </div>
                <div class="row full-width key-resources q-ma-sm">
                  <div class="infobox fit q-pa-sm">Key Resources</div>
                </div>
              </div>
            </div>

            <div class="col value-propositions q-ma-sm">
              <div class="infobox fit q-pa-sm">Value Propositions</div>
            </div>

            <div class="col fit">
              <div class="row fit">
                <div
                  class="row customer-relationships full-width key-activities q-pa-sm"
                >
                  <div class="infobox fit q-pa-sm">Customer Relationships</div>
                </div>
                <div class="row channels full-width key-resources q-ma-sm">
                  <div class="infobox fit q-pa-sm">Channels</div>
                </div>
              </div>
            </div>

            <div class="col customer-segments q-ma-sm">
              <div class="infobox fit q-pa-sm">Customer Segments</div>
            </div>
          </div>
        </div>
        <div class="row full-width key-resources" style="height: 20%">
          <div class="row full-width">
            <div class="col cost-structure q-ma-sm">
              <div class="infobox fit q-pa-sm">Cost Structure</div>
            </div>
            <div class="col revenue-stream q-ma-sm">
              <div class="infobox fit q-pa-sm">Revenue Stream</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>

</script>

<style lang="scss">
.infobox {
  border: solid;
  border-color: lightgrey;
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
}
.canvas-container {
  border-style: solid;
  background-color: white;
}

</style>
