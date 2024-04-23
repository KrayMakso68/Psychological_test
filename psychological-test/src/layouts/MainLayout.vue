<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          PsyTest
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/results" label="Результаты" class="q-mr-lg"/>
        <q-route-tab to="/test1" label="Риск" />
        <q-route-tab to="/test2" label="Уверенность" />
        <q-route-tab to="/test3" label="Самоконтроль" />
        <q-route-tab to="/test4" label="Самооценка" />
        <q-route-tab to="/test5" label="Внимательность" />
        <q-route-tab to="/test6" label="Влияние внешних факторов" />
        <q-route-tab to="/test7" label="Терперамент" />
        <q-route-tab to="/test8" label="Поведение в конфликтной ситуации" />
        <q-route-tab to="/test9" label="Какой вы водитель?" />
      </q-tabs>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-scroll-area class="fit">
      <q-list>

        <q-item-label header class="q-mt-lg">
          Психологические тесты для водителей
        </q-item-label>

        <TestLink
          :key="resultTab.title"
          v-bind="resultTab"
        />

        <q-item-label
          header
          class="q-mt-lg"
        >
          Тесты
        </q-item-label>

        <TestLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TestLink, {TestLinkProps} from 'components/TestLink.vue';

defineOptions({
  name: 'MainLayout'
});

const resultTab: TestLinkProps = {
  title: 'Результаты',
  caption: 'Итоги пройденных тестов',
  icon: 'assignment',
  link: '/results'
};

const linksList: TestLinkProps[] = [
  {
    title: 'Риск',
    caption: 'Любите ли вы риск?',
    icon: 'fact_check',
    link: '/test1'
  },
  {
    title: 'Уверенность',
    caption: 'Насколько вы уверены в себе?',
    icon: 'fact_check',
    link: '/test2'
  },
  {
    title: 'Самоконтроль',
    caption: 'Умеете ли вы контролировать себя?',
    icon: 'fact_check',
    link: '/test3'
  },
  {
    title: 'Самооценка',
    caption: 'Ваша самооценка?',
    icon: 'fact_check',
    link: '/test4'
  },
  {
    title: 'Внимательность',
    caption: 'Внимательный ли вы человек?',
    icon: 'fact_check',
    link: '/test5'
  },
  {
    title: 'Влияние внешних факторов',
    caption: 'Тест на влияние внешних факторов на эмоциональное состояние',
    icon: 'fact_check',
    link: '/test6'
  },
  {
    title: 'Терперамент',
    caption: 'Тест на тип терперамента',
    icon: 'fact_check',
    link: '/test7'
  },
  {
    title: 'Поведение в конфликтной ситуации',
    caption: 'Оценка собственного поведения в конфликтной ситуации на дороге',
    icon: 'fact_check',
    link: '/test8'
  },
  {
    title: 'Какой вы водитель?',
    caption: '',
    icon: 'fact_check',
    link: '/test9'
  }
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
