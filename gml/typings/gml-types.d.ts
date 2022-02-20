/// <reference no-default-lib="true"/>
/// <reference path="./gml-lib.d.ts" />

declare interface Exception {
  /**
   * short message for this exception
   */
  message: string;
  /**
   * longer message for this exception
   */
  longMessage: string;
  /**
   * where the exception came from
   */
  script: string;
  /**
   * line number where the exception came from
   */
  line: number;
  /**
   * stack frame the exception was generated
   */
  stacktrace: string[];
}

declare interface Struct extends Record<string, any> {}

declare interface Int extends Number {
  readonly kind: unique symbol;
}

declare interface Real extends Number {
  readonly kind: unique symbol;
}

declare interface DsList<T> {
  readonly kind: unique symbol;
  _: T[];
}

declare class DsMap<K extends string, V> {
  static readonly kind: unique symbol;
  private map: Record<K, V>;
}

declare interface MpGrid {
  readonly kind: unique symbol;
}

declare class DsGrid<Width = Int, Height = Int> {
  static readonly kind: unique symbol;
  private width: Width;
  private height: Height;
}

declare class DsStack<T> {
  static readonly kind: unique symbol;
  private values: T[];
}

declare class DsQueue<T> {
  static readonly kind: unique symbol;
  private values: T[];
}

declare class DsPriority<T> {
  static readonly kind: unique symbol;
  private values: T[];
}

declare type DsType =
  | typeof ds_type_map
  | typeof ds_type_list
  | typeof ds_type_stack
  | typeof ds_type_queue
  | typeof ds_type_grid
  | typeof ds_type_priority;

declare class GmlObject {
  /** This read-only variable holds the unique identifying number for the instance. Every instance that you create is given a number that is used internally to identify this instance and this variable is what you can use to reference it. The id is also returned (and can be stored in a variable) when an instance is created using instance_create_layer.
   */
  public readonly id: number;
  /** This read only variable returns the index of the object that the instance has been created from. This is not the same as the object name, which is a string and can be found using object_get_name, as this function returns the index number, which is a unique value that GameMaker Studio 2 assigns to every object at the time of creation. */
  public readonly object_index: number;
  public x: number;
  public y: number;
  public xprevious: number;
  public yprevious: number;
  public xstart: number;
  public ystart: number;
  public hspeed: number;
  public vspeed: number;
  public direction: number;
  public speed: number;
  public friction: number;
  public gravity: number;
  public gravity_direction: number;
  public readonly path_index: Path;
  public path_position: number;
  public path_positionprevious: number;
  public path_speed: number;
  public path_scale: number;
  public path_orientation: number;
  public path_endaction:
    | typeof path_action_stop
    | typeof path_action_restart
    | typeof path_action_continue
    | typeof path_action_reverse;
  public solid: boolean;
  public persistent: boolean;
  public mask_index: Sprite;
  /**
   * The number of active instances of this type in the room.
   */
  public get instance_count(): Int;
  /** This read only array holds all the ids of every active instance within the room. This means that if you have used any of the Instance Deactivate functions those instances that have been deactivated will not be included in this array (if you have used a value from this array previously, it will now return the keyword noone). */
  public readonly instance_id: number[];

  public visible: boolean;
  public sprite_index: Sprite;
  public readonly sprite_width: Int;
  public readonly sprite_height: Int;
  public readonly sprite_xoffset: number;
  public readonly sprite_yoffset: number;
  public readonly image_number: Int;
  public image_index: number;
  public image_speed: number;
  public depth: number;
  public image_xscale: number;
  public image_yscale: number;
  public image_angle: number;
  public image_alpha: number;
  public image_blend: number;
  public readonly bbox_left: number;
  public readonly bbox_right: number;
  public readonly bbox_top: number;
  public readonly bbox_bottom: number;

  public readonly alarm: ((this: Instance) => void)[];
  public timeline_index: Timeline;
  public timeline_position: number;
  public timeline_speed: number;
  public timeline_running: boolean;
  public timeline_loop: boolean;

  public phy_rotation: number;
  public phy_position_x: number;
  public phy_position_y: number;
  public phy_angular_velocity: number;
  public phy_linear_velocity_x: number;
  public phy_linear_velocity_y: number;
  public phy_speed_x: number;
  public phy_speed_y: number;
  public readonly phy_speed: number;
  public phy_angular_damping: number;
  public phy_linear_damping: number;
  public phy_bullet: boolean;
  public phy_fixed_rotation: boolean;
  public phy_active: boolean;
  public readonly phy_mass: number;
  public readonly phy_inertia: number;
  public readonly phy_com_x: number;
  public readonly phy_com_y: number;
  public readonly phy_dynamic: boolean;
  public readonly phy_kinematic: boolean;
  public readonly phy_sleeping: boolean;
  public readonly phy_collision_points: Int;
  public readonly phy_collision_x: number[];
  public readonly phy_collision_y: number[];
  public readonly phy_col_normal_x: number[];
  public readonly phy_col_normal_y: number[];
  public readonly phy_position_xprevious: number;
  public readonly phy_position_yprevious: number;
}

declare type Objects = typeof GmlObject;
declare type Instance = GmlObject;

////#endregion

//#region BASE TYPES

declare interface Font {
  readonly kind: unique symbol;
}
declare interface Path {
  readonly kind: unique symbol;
}
declare interface Room {
  readonly kind: unique symbol;
}
declare interface Script {
  readonly kind: unique symbol;
}
declare interface Sequence {
  readonly kind: unique symbol;
}
declare interface Shaders {
  readonly kind: unique symbol;
}
declare interface Sound {
  readonly kind: unique symbol;
}
declare interface Sprite {
  readonly kind: unique symbol;
}
declare interface Tileset {
  readonly kind: unique symbol;
}
declare interface Timeline {
  readonly kind: unique symbol;
}

declare interface WeakReference {
  readonly kind: unique symbol;
}
declare type AssetType =
  | typeof asset_sequence
  | typeof asset_animationcurve
  | typeof asset_tiles
  | typeof asset_object
  | typeof asset_unknown
  | typeof asset_sprite
  | typeof asset_sound
  | typeof asset_room
  | typeof asset_path
  | typeof asset_script
  | typeof asset_font
  | typeof asset_timeline
  | typeof asset_shader;
declare type NetworkType =
  | typeof network_socket_ws
  | typeof network_socket_tcp
  | typeof network_socket_udp
  | typeof network_socket_bluetooth;
declare type NetworkConfig =
  | typeof network_config_avoid_time_wait
  | typeof network_config_connect_timeout
  | typeof network_config_use_non_blocking_socket
  | typeof network_config_enable_reliable_udp
  | typeof network_config_disable_reliable_udp;
declare interface Buffer {
  readonly kind: unique symbol;
}
declare type Surface = typeof application_surface;
declare interface Asset {
  readonly kind: unique symbol;
}
declare interface LayerSequence {
  readonly kind: unique symbol;
}
declare interface Layer {
  readonly kind: unique symbol;
}
declare type GamespeedType =
  | typeof gamespeed_fps
  | typeof gamespeed_microseconds;
declare type BboxMode =
  | typeof bboxmode_automatic
  | typeof bboxmode_fullimage
  | typeof bboxmode_manual;
declare type BboxKind =
  | typeof bboxkind_precise
  | typeof bboxkind_rectangular
  | typeof bboxkind_ellipse
  | typeof bboxkind_diamond;
declare interface Gif {
  readonly kind: unique symbol;
}
declare interface Camera {
  readonly kind: unique symbol;
}
declare type SpriteSpeedType =
  | typeof spritespeed_framespersecond
  | typeof spritespeed_framespergameframe;
declare interface TextureGroup {
  readonly kind: unique symbol;
}
declare type DisplayTimingMethod = typeof tm_sleep | typeof tm_countvsyncs;
declare type DrawLighttype = typeof lighttype_dir | typeof lighttype_point;
declare type GpuCmpfunc =
  | typeof cmpfunc_never
  | typeof cmpfunc_less
  | typeof cmpfunc_equal
  | typeof cmpfunc_lessequal
  | typeof cmpfunc_greater
  | typeof cmpfunc_notequal
  | typeof cmpfunc_greaterequal
  | typeof cmpfunc_always;
declare type GpuCullmode =
  | typeof cull_noculling
  | typeof cull_clockwise
  | typeof cull_counterclockwise;
declare type Blendmode =
  | typeof bm_normal
  | typeof bm_add
  | typeof bm_max
  | typeof bm_subtract;
declare type BlendmodeExt =
  | typeof bm_zero
  | typeof bm_one
  | typeof bm_src_colour
  | typeof bm_inv_src_colour
  | typeof bm_src_color
  | typeof bm_inv_src_color
  | typeof bm_src_alpha
  | typeof bm_inv_src_alpha
  | typeof bm_dest_alpha
  | typeof bm_inv_dest_alpha
  | typeof bm_dest_colour
  | typeof bm_inv_dest_colour
  | typeof bm_dest_color
  | typeof bm_inv_dest_color
  | typeof bm_src_alpha_sat;
declare interface ShaderSampler {
  readonly kind: unique symbol;
}
declare type TextureMipFilter =
  | typeof tf_point
  | typeof tf_linear
  | typeof tf_anisotropic;
declare type TextureMipState =
  | typeof mip_off
  | typeof mip_on
  | typeof mip_markedonly;
declare interface LayerElement {
  readonly kind: unique symbol;
}
declare type LayerElementType =
  | typeof layerelementtype_undefined
  | typeof layerelementtype_background
  | typeof layerelementtype_instance
  | typeof layerelementtype_oldtilemap
  | typeof layerelementtype_sprite
  | typeof layerelementtype_tilemap
  | typeof layerelementtype_particlesystem
  | typeof layerelementtype_tile
  | typeof layerelementtype_sequence;
declare interface LayerBackground {
  readonly kind: unique symbol;
}
declare interface LayerSprite {
  readonly kind: unique symbol;
}
declare interface LayerTileLegacy {
  readonly kind: unique symbol;
}
declare interface LayerInstance {
  readonly kind: unique symbol;
}
declare interface LayerTilemap {
  readonly kind: unique symbol;
}
declare type TilemapData =
  | typeof tile_rotate
  | typeof tile_flip
  | typeof tile_mirror
  | typeof tile_index_mask;
declare type VirtualKeyboardType =
  | typeof kbv_type_default
  | typeof kbv_type_ascii
  | typeof kbv_type_url
  | typeof kbv_type_email
  | typeof kbv_type_numbers
  | typeof kbv_type_phone
  | typeof kbv_type_phone_name;
declare type VirtualKeyboardReturnKey =
  | typeof kbv_returnkey_default
  | typeof kbv_returnkey_go
  | typeof kbv_returnkey_google
  | typeof kbv_returnkey_join
  | typeof kbv_returnkey_next
  | typeof kbv_returnkey_route
  | typeof kbv_returnkey_search
  | typeof kbv_returnkey_send
  | typeof kbv_returnkey_yahoo
  | typeof kbv_returnkey_done
  | typeof kbv_returnkey_continue
  | typeof kbv_returnkey_emergency;
declare type VirtualKeyboardAutocapitalization =
  | typeof kbv_autocapitalize_none
  | typeof kbv_autocapitalize_words
  | typeof kbv_autocapitalize_sentences
  | typeof kbv_autocapitalize_characters;
declare type Pointer = typeof pointer_invalid | typeof pointer_null;
declare type Datetime = typeof GM_build_date;
declare type TimezoneType = typeof timezone_local | typeof timezone_utc;

declare type EventType =
  | typeof ev_create
  | typeof ev_destroy
  | typeof ev_step
  | typeof ev_alarm
  | typeof ev_keyboard
  | typeof ev_mouse
  | typeof ev_collision
  | typeof ev_other
  | typeof ev_draw
  | typeof ev_keypress
  | typeof ev_keyrelease
  | typeof ev_cleanup
  | typeof ev_gesture;
declare const event_number:
  | typeof ev_draw_begin
  | typeof ev_draw_end
  | typeof ev_draw_pre
  | typeof ev_draw_post
  | typeof ev_left_button
  | typeof ev_right_button
  | typeof ev_middle_button
  | typeof ev_no_button
  | typeof ev_left_press
  | typeof ev_right_press
  | typeof ev_middle_press
  | typeof ev_left_release
  | typeof ev_right_release
  | typeof ev_middle_release
  | typeof ev_mouse_enter
  | typeof ev_mouse_leave
  | typeof ev_mouse_wheel_up
  | typeof ev_mouse_wheel_down
  | typeof ev_global_left_button
  | typeof ev_global_right_button
  | typeof ev_global_middle_button
  | typeof ev_global_left_press
  | typeof ev_global_right_press
  | typeof ev_global_middle_press
  | typeof ev_global_left_release
  | typeof ev_global_right_release
  | typeof ev_global_middle_release
  | typeof ev_joystick1_left
  | typeof ev_joystick1_right
  | typeof ev_joystick1_up
  | typeof ev_joystick1_down
  | typeof ev_joystick1_button1
  | typeof ev_joystick1_button2
  | typeof ev_joystick1_button3
  | typeof ev_joystick1_button4
  | typeof ev_joystick1_button5
  | typeof ev_joystick1_button6
  | typeof ev_joystick1_button7
  | typeof ev_joystick1_button8
  | typeof ev_joystick2_left
  | typeof ev_joystick2_right
  | typeof ev_joystick2_up
  | typeof ev_joystick2_down
  | typeof ev_joystick2_button1
  | typeof ev_joystick2_button2
  | typeof ev_joystick2_button3
  | typeof ev_joystick2_button4
  | typeof ev_joystick2_button5
  | typeof ev_joystick2_button6
  | typeof ev_joystick2_button7
  | typeof ev_joystick2_button8
  | typeof ev_outside
  | typeof ev_boundary
  | typeof ev_game_start
  | typeof ev_game_end
  | typeof ev_room_start
  | typeof ev_room_end
  | typeof ev_no_more_lives
  | typeof ev_animation_end
  | typeof ev_end_of_path
  | typeof ev_no_more_health
  | typeof ev_user0
  | typeof ev_user1
  | typeof ev_user2
  | typeof ev_user3
  | typeof ev_user4
  | typeof ev_user5
  | typeof ev_user6
  | typeof ev_user7
  | typeof ev_user8
  | typeof ev_user9
  | typeof ev_user10
  | typeof ev_user11
  | typeof ev_user12
  | typeof ev_user13
  | typeof ev_user14
  | typeof ev_user15
  | typeof ev_outside_view0
  | typeof ev_outside_view1
  | typeof ev_outside_view2
  | typeof ev_outside_view3
  | typeof ev_outside_view4
  | typeof ev_outside_view5
  | typeof ev_outside_view6
  | typeof ev_outside_view7
  | typeof ev_boundary_view0
  | typeof ev_boundary_view1
  | typeof ev_boundary_view2
  | typeof ev_boundary_view3
  | typeof ev_boundary_view4
  | typeof ev_boundary_view5
  | typeof ev_boundary_view6
  | typeof ev_boundary_view7
  | typeof ev_animation_update
  | typeof ev_animation_event
  | typeof ev_web_image_load
  | typeof ev_web_sound_load
  | typeof ev_web_async
  | typeof ev_dialog_async
  | typeof ev_web_iap
  | typeof ev_web_cloud
  | typeof ev_web_networking
  | typeof ev_web_steam
  | typeof ev_social
  | typeof ev_push_notification
  | typeof ev_async_save_load
  | typeof ev_audio_recording
  | typeof ev_audio_playback
  | typeof ev_system_event
  | typeof ev_broadcast_message
  | typeof ev_step_normal
  | typeof ev_step_begin
  | typeof ev_step_end
  | typeof ev_gui
  | typeof ev_gui_begin
  | typeof ev_gui_end
  | typeof ev_gesture_tap
  | typeof ev_gesture_double_tap
  | typeof ev_gesture_drag_start
  | typeof ev_gesture_dragging
  | typeof ev_gesture_drag_end
  | typeof ev_gesture_flick
  | typeof ev_gesture_pinch_start
  | typeof ev_gesture_pinch_in
  | typeof ev_gesture_pinch_out
  | typeof ev_gesture_pinch_end
  | typeof ev_gesture_rotate_start
  | typeof ev_gesture_rotating
  | typeof ev_gesture_rotate_end
  | typeof ev_global_gesture_tap
  | typeof ev_global_gesture_double_tap
  | typeof ev_global_gesture_drag_start
  | typeof ev_global_gesture_dragging
  | typeof ev_global_gesture_drag_end
  | typeof ev_global_gesture_flick
  | typeof ev_global_gesture_pinch_start
  | typeof ev_global_gesture_pinch_in
  | typeof ev_global_gesture_pinch_out
  | typeof ev_global_gesture_pinch_end
  | typeof ev_global_gesture_rotate_start
  | typeof ev_global_gesture_rotating
  | typeof ev_global_gesture_rotate_end;
declare const mouse_button:
  | typeof mb_any
  | typeof mb_none
  | typeof mb_left
  | typeof mb_right
  | typeof mb_middle;
declare type HorizontalAlignment =
  | typeof fa_left
  | typeof fa_center
  | typeof fa_right;
declare type VerticalAlignment =
  | typeof fa_top
  | typeof fa_middle
  | typeof fa_bottom;
declare type PrimitiveType =
  | typeof pr_pointlist
  | typeof pr_linelist
  | typeof pr_linestrip
  | typeof pr_trianglelist
  | typeof pr_trianglestrip
  | typeof pr_trianglefan;
declare interface Texture {
  readonly kind: unique symbol;
}
declare type AudioFalloffModel =
  | typeof audio_falloff_none
  | typeof audio_falloff_inverse_distance
  | typeof audio_falloff_inverse_distance_clamped
  | typeof audio_falloff_linear_distance
  | typeof audio_falloff_linear_distance_clamped
  | typeof audio_falloff_exponent_distance
  | typeof audio_falloff_exponent_distance_clamped;
declare type AudioSoundChannel =
  | typeof audio_mono
  | typeof audio_stereo
  | typeof audio_3d;
declare type DisplayOrientation =
  | typeof display_landscape
  | typeof display_landscape_flipped
  | typeof display_portrait
  | typeof display_portrait_flipped;
declare type WindowCursor =
  | typeof cr_default
  | typeof cr_none
  | typeof cr_arrow
  | typeof cr_cross
  | typeof cr_beam
  | typeof cr_size_nesw
  | typeof cr_size_ns
  | typeof cr_size_nwse
  | typeof cr_size_we
  | typeof cr_uparrow
  | typeof cr_hourglass
  | typeof cr_drag
  | typeof cr_appstart
  | typeof cr_handpoint
  | typeof cr_size_all;
declare interface AudioEmitter {
  readonly kind: unique symbol;
}
declare interface SoundInstance {
  readonly kind: unique symbol;
}
declare interface SoundSyncGroup {
  readonly kind: unique symbol;
}
declare interface AudioGroup {
  readonly kind: unique symbol;
}
declare type BufferType =
  | typeof buffer_u8
  | typeof buffer_s8
  | typeof buffer_u16
  | typeof buffer_s16
  | typeof buffer_u32
  | typeof buffer_s32
  | typeof buffer_u64
  | typeof buffer_f16
  | typeof buffer_f32
  | typeof buffer_f64
  | typeof buffer_bool
  | typeof buffer_text
  | typeof buffer_string;
declare interface SoundPlayQueue {
  readonly kind: unique symbol;
}
declare interface HtmlClickableTpe {
  readonly kind: unique symbol;
}
declare interface HtmlClickable {
  readonly kind: unique symbol;
}
declare interface FileHandle {
  readonly kind: unique symbol;
}
declare type FileAttribute =
  | typeof fa_readonly
  | typeof fa_hidden
  | typeof fa_sysfile
  | typeof fa_volumeid
  | typeof fa_directory
  | typeof fa_archive;
declare interface BinaryFileHandle {
  readonly kind: unique symbol;
}
declare type EffectKind =
  | typeof ef_explosion
  | typeof ef_ring
  | typeof ef_ellipse
  | typeof ef_firework
  | typeof ef_smoke
  | typeof ef_smokeup
  | typeof ef_star
  | typeof ef_spark
  | typeof ef_flare
  | typeof ef_cloud
  | typeof ef_rain
  | typeof ef_snow;
declare interface Particle {
  readonly kind: unique symbol;
}
declare type ParticleShape =
  | typeof pt_shape_pixel
  | typeof pt_shape_disk
  | typeof pt_shape_square
  | typeof pt_shape_line
  | typeof pt_shape_star
  | typeof pt_shape_circle
  | typeof pt_shape_ring
  | typeof pt_shape_sphere
  | typeof pt_shape_flare
  | typeof pt_shape_spark
  | typeof pt_shape_explosion
  | typeof pt_shape_cloud
  | typeof pt_shape_smoke
  | typeof pt_shape_snow;
declare interface ParticleSystem {
  readonly kind: unique symbol;
}
declare interface ParticleEmitter {
  readonly kind: unique symbol;
}
declare type ParticleRegionShape =
  | typeof ps_shape_rectangle
  | typeof ps_shape_ellipse
  | typeof ps_shape_diamond
  | typeof ps_shape_line;
declare type ParticleDistribution =
  | typeof ps_distr_linear
  | typeof ps_distr_gaussian
  | typeof ps_distr_invgaussian;
declare type ExternalCallType = typeof dll_cdecl | typeof dll_stdcall;
declare type ExternalValueType = typeof ty_real | typeof ty_string;
declare interface ExternalFunction {
  readonly kind: unique symbol;
}
declare type MatrixType =
  | typeof matrix_view
  | typeof matrix_projection
  | typeof matrix_world;
declare const os_type:
  | typeof os_windows
  | typeof os_macosx
  | typeof os_ios
  | typeof os_android
  | typeof os_linux
  | typeof os_unknown
  | typeof os_winphone
  | typeof os_win8native
  | typeof os_psvita
  | typeof os_xboxone
  | typeof os_uwp
  | typeof os_tvos
  | typeof os_switch;
declare type DeviceType =
  | typeof os_device
  | typeof device_ios_unknown
  | typeof device_ios_iphone
  | typeof device_ios_iphone_retina
  | typeof device_ios_ipad
  | typeof device_ios_ipad_retina
  | typeof device_ios_iphone5
  | typeof device_ios_iphone6
  | typeof device_ios_iphone6plus
  | typeof device_emulator
  | typeof device_tablet;
declare type BrowserType =
  | typeof os_browser
  | typeof browser_not_a_browser
  | typeof browser_unknown
  | typeof browser_ie
  | typeof browser_firefox
  | typeof browser_chrome
  | typeof browser_safari
  | typeof browser_safari_mobile
  | typeof browser_opera
  | typeof browser_tizen
  | typeof browser_edge
  | typeof browser_windows_store
  | typeof browser_ie_mobile;
declare type AndroidPermissionState =
  | typeof os_permission_denied_dont_request
  | typeof os_permission_denied
  | typeof os_permission_granted;
declare interface VirtualKey {
  readonly kind: unique symbol;
}
declare type AchievementLeaderboardFilter =
  | typeof achievement_filter_all_players
  | typeof achievement_filter_friends_only
  | typeof achievement_filter_favorites_only;
declare type AchievementChallengeType =
  | typeof achievement_type_achievement_challenge
  | typeof achievement_type_score_challenge;
declare type AchievementShowType =
  | typeof achievement_show_ui
  | typeof achievement_show_profile
  | typeof achievement_show_leaderboard
  | typeof achievement_show_achievement
  | typeof achievement_show_bank
  | typeof achievement_show_friend_picker
  | typeof achievement_show_purchase_prompt;
declare type AchievementAsyncId =
  | typeof achievement_our_info
  | typeof achievement_friends_info
  | typeof achievement_leaderboard_info
  | typeof achievement_achievement_info
  | typeof achievement_pic_loaded;
declare type IapAsyncId =
  | typeof iap_data
  | typeof iap_ev_storeload
  | typeof iap_ev_product
  | typeof iap_ev_purchase
  | typeof iap_ev_consume
  | typeof iap_ev_restore;
declare type IapAsyncStoreload =
  | typeof iap_storeload_ok
  | typeof iap_storeload_failed;
declare type IapSystemStatus =
  | typeof iap_status_uninitialised
  | typeof iap_status_unavailable
  | typeof iap_status_loading
  | typeof iap_status_available
  | typeof iap_status_processing
  | typeof iap_status_restoring;
declare type IapOrderStatus =
  | typeof iap_failed
  | typeof iap_unavailable
  | typeof iap_available
  | typeof iap_purchased
  | typeof iap_canceled
  | typeof iap_refunded;
declare type GamepadButton =
  | typeof gp_face1
  | typeof gp_face2
  | typeof gp_face3
  | typeof gp_face4
  | typeof gp_shoulderl
  | typeof gp_shoulderr
  | typeof gp_shoulderlb
  | typeof gp_shoulderrb
  | typeof gp_select
  | typeof gp_start
  | typeof gp_stickl
  | typeof gp_stickr
  | typeof gp_padu
  | typeof gp_padd
  | typeof gp_padl
  | typeof gp_padr
  | typeof gp_axislh
  | typeof gp_axislv
  | typeof gp_axisrh
  | typeof gp_axisrv;
declare type PhysicsDebugFlag =
  | typeof phy_debug_render_aabb
  | typeof phy_debug_render_collision_pairs
  | typeof phy_debug_render_coms
  | typeof phy_debug_render_core_shapes
  | typeof phy_debug_render_joints
  | typeof phy_debug_render_obb
  | typeof phy_debug_render_shapes;
declare interface PhysicsFixture {
  readonly kind: unique symbol;
}
declare interface PhysicsJoint {
  readonly kind: unique symbol;
}
declare type PhysicsJointValue =
  | typeof phy_joint_anchor_1_x
  | typeof phy_joint_anchor_1_y
  | typeof phy_joint_anchor_2_x
  | typeof phy_joint_anchor_2_y
  | typeof phy_joint_reaction_force_x
  | typeof phy_joint_reaction_force_y
  | typeof phy_joint_reaction_torque
  | typeof phy_joint_motor_speed
  | typeof phy_joint_angle
  | typeof phy_joint_motor_torque
  | typeof phy_joint_max_motor_torque
  | typeof phy_joint_translation
  | typeof phy_joint_speed
  | typeof phy_joint_motor_force
  | typeof phy_joint_max_motor_force
  | typeof phy_joint_length_1
  | typeof phy_joint_length_2
  | typeof phy_joint_damping_ratio
  | typeof phy_joint_frequency
  | typeof phy_joint_lower_angle_limit
  | typeof phy_joint_upper_angle_limit
  | typeof phy_joint_angle_limits
  | typeof phy_joint_max_length
  | typeof phy_joint_max_torque
  | typeof phy_joint_max_force;
declare type PhysicsParticleFlag =
  | typeof phy_particle_flag_water
  | typeof phy_particle_flag_zombie
  | typeof phy_particle_flag_wall
  | typeof phy_particle_flag_spring
  | typeof phy_particle_flag_elastic
  | typeof phy_particle_flag_viscous
  | typeof phy_particle_flag_powder
  | typeof phy_particle_flag_tensile
  | typeof phy_particle_flag_colourmixing
  | typeof phy_particle_flag_colormixing;
declare interface PhysicsParticle {
  readonly kind: unique symbol;
}
declare type PhysicsParticleDataFlag =
  | typeof phy_particle_data_flag_typeflags
  | typeof phy_particle_data_flag_position
  | typeof phy_particle_data_flag_velocity
  | typeof phy_particle_data_flag_category;
declare type PhysicsParticleGroupFlag =
  | typeof phy_particle_group_flag_solid
  | typeof phy_particle_group_flag_rigid;
declare interface PhysicsParticleGroup {
  readonly kind: unique symbol;
}
declare interface NetworkSocket {
  readonly kind: unique symbol;
}
declare interface NetworkServer {
  readonly kind: unique symbol;
}
declare type NetworkAsyncId =
  | typeof network_type_connect
  | typeof network_type_disconnect
  | typeof network_type_data
  | typeof network_type_non_blocking_connect;
declare type BufferKind =
  | typeof buffer_fixed
  | typeof buffer_grow
  | typeof buffer_wrap
  | typeof buffer_fast
  | typeof buffer_vbuffer;
declare interface BufferAutoType {
  readonly kind: unique symbol;
}
declare type BufferSeekBase =
  | typeof buffer_seek_start
  | typeof buffer_seek_relative
  | typeof buffer_seek_end;
declare interface VertexBuffer {
  readonly kind: unique symbol;
}
declare type SteamOverlayPage =
  | typeof ov_friends
  | typeof ov_community
  | typeof ov_players
  | typeof ov_settings
  | typeof ov_gamegroup
  | typeof ov_achievements;
declare type SteamLeaderboardSortType =
  | typeof lb_sort_none
  | typeof lb_sort_ascending
  | typeof lb_sort_descending;
declare type SteamLeaderboardDisplayType =
  | typeof lb_disp_none
  | typeof lb_disp_numeric
  | typeof lb_disp_time_sec
  | typeof lb_disp_time_ms;
declare interface SteamId {
  readonly kind: unique symbol;
}
declare interface SteamUgc {
  readonly kind: unique symbol;
}
declare type SteamUgcType =
  | typeof ugc_filetype_community
  | typeof ugc_filetype_microtrans;
declare type SteamUgcVisibility =
  | typeof ugc_visibility_public
  | typeof ugc_visibility_friends_only
  | typeof ugc_visibility_private;
declare type SteamUgcQueryListType =
  | typeof ugc_list_Published
  | typeof ugc_list_VotedOn
  | typeof ugc_list_VotedUp
  | typeof ugc_list_VotedDown
  | typeof ugc_list_WillVoteLater
  | typeof ugc_list_Favorited
  | typeof ugc_list_Subscribed
  | typeof ugc_list_UsedOrPlayed
  | typeof ugc_list_Followed;
declare type SteamUgcQueryMatchType =
  | typeof ugc_match_Items
  | typeof ugc_match_Items_Mtx
  | typeof ugc_match_Items_ReadyToUse
  | typeof ugc_match_Collections
  | typeof ugc_match_Artwork
  | typeof ugc_match_Videos
  | typeof ugc_match_Screenshots
  | typeof ugc_match_AllGuides
  | typeof ugc_match_WebGuides
  | typeof ugc_match_IntegratedGuides
  | typeof ugc_match_UsableInGame
  | typeof ugc_match_ControllerBindings;
declare type SteamUgcQuerySortOrder =
  | typeof ugc_sortorder_CreationOrderDesc
  | typeof ugc_sortorder_CreationOrderAsc
  | typeof ugc_sortorder_TitleAsc
  | typeof ugc_sortorder_LastUpdatedDesc
  | typeof ugc_sortorder_SubscriptionDateDesc
  | typeof ugc_sortorder_VoteScoreDesc
  | typeof ugc_sortorder_ForModeration;
declare type SteamUgcQueryType =
  | typeof ugc_query_RankedByVote
  | typeof ugc_query_RankedByPublicationDate
  | typeof ugc_query_AcceptedForGameRankedByAcceptanceDate
  | typeof ugc_query_RankedByTrend
  | typeof ugc_query_FavoritedByFriendsRankedByPublicationDate
  | typeof ugc_query_CreatedByFriendsRankedByPublicationDate
  | typeof ugc_query_RankedByNumTimesReported
  | typeof ugc_query_CreatedByFollowedUsersRankedByPublicationDate
  | typeof ugc_query_NotYetRated
  | typeof ugc_query_RankedByTotalVotesAsc
  | typeof ugc_query_RankedByVotesUp
  | typeof ugc_query_RankedByTextSearch;
declare interface SteamUgcQuery {
  readonly kind: unique symbol;
}
declare type SteamUgcAsyncResult = typeof ugc_result_success;
declare interface ShaderUniform {
  readonly kind: unique symbol;
}
declare interface VertexFormat {
  readonly kind: unique symbol;
}
declare type VertexType =
  | typeof vertex_type_float1
  | typeof vertex_type_float2
  | typeof vertex_type_float3
  | typeof vertex_type_float4
  | typeof vertex_type_colour
  | typeof vertex_type_color
  | typeof vertex_type_ubyte4;
declare type VertexUsage =
  | typeof vertex_usage_position
  | typeof vertex_usage_colour
  | typeof vertex_usage_color
  | typeof vertex_usage_normal
  | typeof vertex_usage_texcoord
  | typeof vertex_usage_blendweight
  | typeof vertex_usage_blendindices
  | typeof vertex_usage_psize
  | typeof vertex_usage_tangent
  | typeof vertex_usage_binormal
  | typeof vertex_usage_fog
  | typeof vertex_usage_depth
  | typeof vertex_usage_sample;
//#endregion

//#region VARIABLE TYPES

declare let mask_index: Sprite;
declare let cursor_sprite: Sprite;
declare let sprite_index: Sprite;
declare let timeline_index: Timeline;
declare let room_first: Room;
declare let room_last: Room;
//#endregion

//#region FUNCTION TYPES

declare function is_struct(val: any): boolean;
declare function is_method(val: any): boolean;
declare function exception_unhandled_handler(
  user_handler: (arg0: Exception, arg1: any | void) => any
): any;
declare function variable_struct_exists<T extends Struct>(
  struct: T,
  name: string
): boolean;
declare function variable_struct_get<T extends Struct>(
  struct: T,
  name: string
): any;
declare function variable_struct_set<T extends Struct>(
  struct: T,
  name: string,
  val: any
): void;
declare function variable_struct_get_names<T extends Struct>(
  struct: T
): string[];
declare function variable_struct_names_count<T extends Struct>(struct: T): Int;
declare function variable_struct_remove<T extends Struct>(
  struct: T,
  name: string
): void;
declare function array_length<T extends any>(variable: T[]): Int;
declare function array_resize<T extends any>(variable: T[], newsize: Int): void;
declare function array_push<T extends any>(array: T[], ...values: T[]): void;
declare function array_pop<T extends any>(array: T[]): T;
declare function array_insert<T extends any>(
  array: T[],
  index: Int,
  ...values: T[]
): void;
declare function array_delete<T extends any>(
  array: T[],
  index: Int,
  number: Int
): void;
declare function array_sort<T extends any>(
  array: T[],
  sortType_or_function: boolean | ((arg0: T, arg1: T, arg2: Int) => any)
): void;
declare function weak_ref_create<T extends Struct>(
  thing_to_track: T
): WeakReference;
declare function weak_ref_alive(weak_ref: WeakReference): boolean;
declare function weak_ref_any_alive(
  array: WeakReference[],
  index?: Int,
  length?: Int
): boolean;
declare function method<T extends Function>(
  context: Instance | Struct | undefined,
  func: T
): T;
declare function method_get_index(method: any): any;
declare function method_get_self(method: any): any;
declare function string_pos_ext(
  substr: string,
  str: string,
  startpos: Int
): Int;
declare function string_last_pos(substr: string, str: string): Int;
declare function string_last_pos_ext(
  substr: string,
  str: string,
  startpos: Int
): Int;
declare function debug_get_callstack(maxDepth?: Int): string[];

/**
 * @param [offset=0]
 * @param [num_args=args_length - offset]
 */
declare function script_execute_ext(
  ind: Script,
  args: any[],
  offset?: Int,
  num_args?: Int
): any;
declare function ds_list_is_map<T extends any>(
  list: DsList<T>,
  pos: Int
): boolean;
declare function ds_list_is_list<T extends any>(
  list: DsList<T>,
  pos: Int
): boolean;
declare function ds_map_values_to_array<K extends string, V extends any>(
  map: DsMap<K, V>,
  arg1?: K[]
): K[];
declare function ds_map_keys_to_array<K extends string, V extends any>(
  map: DsMap<K, V>,
  arg1?: V[]
): V[];
declare function ds_map_is_map<K extends string, V extends any>(
  map: DsMap<K, V>,
  key: K
): boolean;
declare function ds_map_is_list<K extends string, V extends any>(
  map: DsMap<K, V>,
  key: K
): boolean;
declare function json_stringify<
  T extends Struct | any[] | number | string | undefined
>(val: T): string;
declare function json_parse(json: string): any;
declare function buffer_get_surface(
  buffer: Buffer,
  Surface: Surface,
  offset: Int
): void;
declare function buffer_set_surface(
  buffer: Buffer,
  Surface: Surface,
  offset: Int
): void;
declare function tag_get_asset_ids(
  tags: string | string[],
  asset_type: AssetType
): Asset[];
declare function tag_get_assets(tags: string | string[]): string[];
declare function asset_get_tags(
  asset_name_or_id: string | Asset,
  asset_type?: AssetType
): string[];
declare function asset_add_tags(
  asset_name_or_id: string | Asset,
  tags: string | string[],
  asset_type?: AssetType
): boolean;
declare function asset_remove_tags(
  asset_name_or_id: string | Asset,
  tags: string | string[],
  asset_type?: AssetType
): boolean;
declare function asset_has_tags(
  asset_name_or_id: string | Asset,
  tags: string | string[],
  asset_type?: AssetType
): boolean;
declare function asset_has_any_tag(
  asset_name_or_id: string | Asset,
  tags: string | string[],
  asset_type?: AssetType
): boolean;
declare function asset_clear_tags(
  asset_name_or_id: string | Asset,
  asset_type?: AssetType
): boolean;
declare function layer_sequence_get_instance(
  sequence_element_id: LayerSequence
): any;
declare function layer_sequence_create(
  layer_id: Layer | string,
  x: number,
  y: number,
  sequence_id: Sequence
): LayerSequence;
declare function layer_sequence_destroy(
  sequence_element_id: LayerSequence
): void;
declare function layer_sequence_exists(
  layer_id: Layer | string,
  sequence_element_id: LayerSequence
): boolean;
declare function layer_sequence_x(
  sequence_element_id: LayerSequence,
  pos_x: number
): void;
declare function layer_sequence_y(
  sequence_element_id: LayerSequence,
  pos_y: number
): void;
declare function layer_sequence_angle(
  sequence_element_id: LayerSequence,
  angle: number
): void;
declare function layer_sequence_xscale(
  sequence_element_id: LayerSequence,
  xscale: number
): void;
declare function layer_sequence_yscale(
  sequence_element_id: LayerSequence,
  yscale: number
): void;
declare function layer_sequence_headpos(
  sequence_element_id: LayerSequence,
  position: number
): void;
declare function layer_sequence_headdir(
  sequence_element_id: LayerSequence,
  direction: number
): void;
declare function layer_sequence_pause(sequence_element_id: LayerSequence): void;
declare function layer_sequence_play(sequence_element_id: LayerSequence): void;
declare function layer_sequence_speedscale(
  sequence_element_id: LayerSequence,
  speedscale: number
): void;
declare function layer_sequence_get_x(
  sequence_element_id: LayerSequence
): number;
declare function layer_sequence_get_y(
  sequence_element_id: LayerSequence
): number;
declare function layer_sequence_get_angle(
  sequence_element_id: LayerSequence
): number;
declare function layer_sequence_get_xscale(
  sequence_element_id: LayerSequence
): number;
declare function layer_sequence_get_yscale(
  sequence_element_id: LayerSequence
): number;
declare function layer_sequence_get_headpos(
  sequence_element_id: LayerSequence
): number;
declare function layer_sequence_get_headdir(
  sequence_element_id: LayerSequence
): number;
declare function layer_sequence_get_sequence(
  sequence_element_id: LayerSequence
): any;
declare function layer_sequence_is_paused(
  sequence_element_id: LayerSequence
): boolean;
declare function layer_sequence_is_finished(
  sequence_element_id: LayerSequence
): boolean;
declare function layer_sequence_get_speedscale(
  sequence_element_id: LayerSequence
): number;
declare function layer_sequence_get_length(
  sequence_element_id: LayerSequence
): Int;
declare function gc_collect(): void;
declare function gc_enable(enable: boolean): void;
declare function gc_is_enabled(): boolean;
declare function gc_get_stats(): any;
declare function gc_target_frame_time(time: Int): void;
declare function gc_get_target_frame_time(): Int;
declare function is_nan(val: any): boolean;
declare function is_infinity(val: any): boolean;
declare function variable_instance_get_names<T extends Instance>(
  id: T
): string[];
declare function variable_instance_names_count<T extends Instance>(id: T): Int;
declare function string_hash_to_newline(str: string): string;
declare function game_set_speed(value: number, type: GamespeedType): void;
declare function game_get_speed(type: GamespeedType): number;
declare function collision_point_list<T extends Objects>(
  x: number,
  y: number,
  obj: T,
  prec: boolean,
  notme: boolean,
  list: DsList<T>,
  ordered: boolean
): Int;
declare function collision_rectangle_list<T extends Objects>(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  obj: T,
  prec: boolean,
  notme: boolean,
  list: DsList<T>,
  ordered: boolean
): Int;
declare function collision_circle_list<T extends Objects>(
  x1: number,
  y1: number,
  radius: number,
  obj: T,
  prec: boolean,
  notme: boolean,
  list: DsList<T>,
  ordered: boolean
): Int;
declare function collision_ellipse_list<T extends Objects>(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  obj: T,
  prec: boolean,
  notme: boolean,
  list: DsList<T>,
  ordered: boolean
): Int;
declare function collision_line_list<T extends Objects>(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  obj: T,
  prec: boolean,
  notme: boolean,
  list: DsList<T>,
  ordered: boolean
): Int;
declare function instance_position_list<T extends Objects>(
  x: number,
  y: number,
  obj: T,
  list: DsList<T>,
  ordered: boolean
): Int;
declare function instance_place_list<T extends Objects>(
  x: number,
  y: number,
  obj: T,
  list: DsList<T>,
  ordered: boolean
): Int;
declare function gif_open(width: Int, height: Int, clear_color: Int): Gif;
declare function gif_add_surface(
  gifindex: Gif,
  surfaceindex: Surface,
  delaytime: Int,
  xoffset?: Int,
  yoffset?: Int,
  quantization?: Int
): Int;
declare function gif_save(Gif: Gif, filename: string): Int;
declare function gif_save_buffer(Gif: Gif): Buffer;
declare function sprite_set_speed(
  ind: Sprite,
  speed: number,
  type: SpriteSpeedType
): void;
declare function sprite_get_speed_type(ind: Sprite): SpriteSpeedType;
declare function sprite_get_speed(ind: Sprite): number;
declare function texture_is_ready(tex_id: TextureGroup | string): boolean;
declare function texture_prefetch(
  tex_id_or_groupname: TextureGroup | string
): void;
declare function texture_flush(
  tex_id_or_groupname: TextureGroup | string
): void;
declare function texturegroup_get_textures(groupname: string): TextureGroup[];
declare function texturegroup_get_sprites(groupname: string): Sprite[];
declare function texturegroup_get_fonts(groupname: string): Font[];
declare function texturegroup_get_tilesets(groupname: string): Tileset[];
declare function texture_debug_messages(debug_level: boolean): void;
declare function room_get_camera(ind: Room, vind: Int): Camera;
declare function room_set_camera(ind: Room, vind: Int, Camera: Camera): void;
declare function matrix_build_identity(): number[];
declare function matrix_build_lookat(
  xfrom: number,
  yfrom: number,
  zfrom: number,
  xto: number,
  yto: number,
  zto: number,
  xup: number,
  yup: number,
  zup: number
): number[];
declare function matrix_build_projection_ortho(
  width: number,
  height: number,
  znear: number,
  zfar: number
): number[];
declare function matrix_build_projection_perspective(
  width: number,
  height: number,
  znear: number,
  zfar: number
): number[];
declare function matrix_build_projection_perspective_fov(
  fov_y: number,
  aspect: number,
  znear: number,
  zfar: number
): number[];
declare function matrix_transform_vertex(
  matrix: number[],
  x: number,
  y: number,
  z: number
): number[];
declare function matrix_stack_push(matrix: number[]): void;
declare function matrix_stack_pop(): void;
declare function matrix_stack_set(matrix: number[]): void;
declare function matrix_stack_clear(): void;
declare function matrix_stack_top(): number[];
declare function matrix_stack_is_empty(): boolean;
declare function display_set_timing_method(method: DisplayTimingMethod): void;
declare function display_get_timing_method(): DisplayTimingMethod;
declare function display_set_sleep_margin(milliseconds: number): void;
declare function display_get_sleep_margin(): number;
declare function gpu_set_blendenable(enable: boolean): void;
declare function gpu_set_ztestenable(enable: boolean): void;
declare function gpu_set_zfunc(cmp_func: GpuCmpfunc): void;
declare function gpu_get_zfunc(): GpuCmpfunc;
declare function gpu_set_cullmode(cullmode: GpuCullmode): void;
declare function gpu_get_cullmode(): GpuCullmode;
declare function gpu_set_zwriteenable(enable: boolean): void;
declare function gpu_set_fog(
  array_or_enable: boolean | any[],
  col?: number,
  start?: number,
  end?: number
): void;
declare function gpu_set_blendmode(mode: Blendmode): void;
declare function gpu_set_blendmode_ext(
  src: BlendmodeExt,
  dest: BlendmodeExt
): void;
declare function gpu_set_blendmode_ext_sepalpha(
  src: BlendmodeExt,
  dest: BlendmodeExt,
  srcalpha: BlendmodeExt,
  destalpha: BlendmodeExt
): void;
declare function gpu_set_colorwriteenable(
  red_or_array: boolean | boolean[],
  green?: boolean,
  blue?: boolean,
  alpha?: boolean
): void;
declare function gpu_set_colourwriteenable(
  red_or_array: boolean | boolean[],
  green?: boolean,
  blue?: any,
  alpha?: boolean
): void;
declare function gpu_set_alphatestenable(enable: boolean): void;
declare function gpu_set_alphatestref(value: Int): void;
declare function gpu_set_texfilter(linear: boolean): void;
declare function gpu_set_texfilter_ext(
  sampler_id: ShaderSampler,
  linear: boolean
): void;
declare function gpu_set_texrepeat(repeat: boolean): void;
declare function gpu_set_texrepeat_ext(
  sampler_id: ShaderSampler,
  repeat: boolean
): void;
declare function gpu_set_tex_filter(linear: boolean): void;
declare function gpu_set_tex_filter_ext(
  sampler_id: ShaderSampler,
  linear: boolean
): void;
declare function gpu_set_tex_repeat(repeat: boolean): void;
declare function gpu_set_tex_repeat_ext(
  sampler_id: ShaderSampler,
  repeat: boolean
): void;
declare function gpu_set_tex_mip_filter(filter: TextureMipFilter): void;
declare function gpu_set_tex_mip_filter_ext(
  sampler_id: ShaderSampler,
  filter: TextureMipFilter
): void;
declare function gpu_set_tex_mip_bias(bias: number): void;
declare function gpu_set_tex_mip_bias_ext(
  sampler_id: ShaderSampler,
  bias: number
): void;
declare function gpu_set_tex_min_mip(minmip: Int): void;
declare function gpu_set_tex_min_mip_ext(
  sampler_id: ShaderSampler,
  minmip: Int
): void;
declare function gpu_set_tex_max_mip(maxmip: Int): void;
declare function gpu_set_tex_max_mip_ext(
  sampler_id: ShaderSampler,
  maxmip: Int
): void;
declare function gpu_set_tex_max_aniso(maxaniso: Int): void;
declare function gpu_set_tex_max_aniso_ext(
  sampler_id: ShaderSampler,
  maxaniso: Int
): void;
declare function gpu_set_tex_mip_enable(setting: TextureMipState): any;
declare function gpu_set_tex_mip_enable_ext(
  sampler_id: ShaderSampler,
  setting: TextureMipState
): any;
declare function gpu_get_blendenable(): boolean;
declare function gpu_get_ztestenable(): boolean;
declare function gpu_get_zwriteenable(): boolean;
declare function gpu_get_fog(): any[];
declare function gpu_get_blendmode(): Blendmode;
declare function gpu_get_blendmode_ext(): BlendmodeExt[];
declare function gpu_get_blendmode_ext_sepalpha(): BlendmodeExt[];
declare function gpu_get_blendmode_src(): BlendmodeExt;
declare function gpu_get_blendmode_dest(): BlendmodeExt;
declare function gpu_get_blendmode_srcalpha(): BlendmodeExt;
declare function gpu_get_blendmode_destalpha(): BlendmodeExt;
declare function gpu_get_colorwriteenable(): boolean;
declare function gpu_get_colourwriteenable(): boolean;
declare function gpu_get_alphatestenable(): boolean;
declare function gpu_get_alphatestref(): Int;
declare function gpu_get_texfilter(): boolean;
declare function gpu_get_texfilter_ext(sampler_id: ShaderSampler): boolean;
declare function gpu_get_texrepeat(): boolean;
declare function gpu_get_texrepeat_ext(sampler_id: ShaderSampler): boolean;
declare function gpu_get_tex_filter(): boolean;
declare function gpu_get_tex_filter_ext(sampler_id: ShaderSampler): boolean;
declare function gpu_get_tex_repeat(): boolean;
declare function gpu_get_tex_repeat_ext(sampler_id: ShaderSampler): boolean;
declare function gpu_get_tex_mip_filter(): TextureMipFilter;
declare function gpu_get_tex_mip_filter_ext(
  sampler_id: ShaderSampler
): TextureMipFilter;
declare function gpu_get_tex_mip_bias(): number;
declare function gpu_get_tex_mip_bias_ext(sampler_id: ShaderSampler): number;
declare function gpu_get_tex_min_mip(): Int;
declare function gpu_get_tex_min_mip_ext(sampler_id: ShaderSampler): Int;
declare function gpu_get_tex_max_mip(): Int;
declare function gpu_get_tex_max_mip_ext(sampler_id: ShaderSampler): Int;
declare function gpu_get_tex_max_aniso(): Int;
declare function gpu_get_tex_max_aniso_ext(sampler_id: ShaderSampler): Int;
declare function gpu_get_tex_mip_enable(): TextureMipState;
declare function gpu_get_tex_mip_enable_ext(
  sampler_id: ShaderSampler
): TextureMipState;
declare function gpu_push_state(): void;
declare function gpu_pop_state(): void;
declare function gpu_get_state(): DsMap<string, any>;
declare function gpu_set_state(map: DsMap<string, any>): void;
declare function draw_light_define_ambient(col: Int): void;
declare function draw_light_define_direction(
  ind: Int,
  dx: number,
  dy: number,
  dz: number,
  col: Int
): void;
declare function draw_light_define_point(
  ind: Int,
  x: number,
  y: number,
  z: number,
  range: number,
  col: Int
): void;
declare function draw_light_enable(ind: Int, enable: boolean): void;
declare function draw_set_lighting(enable: boolean): void;
declare function draw_light_get_ambient(): Int;
declare function draw_light_get(ind: Int): any[];
declare function draw_get_lighting(): boolean;
declare function gamepad_hat_count(device: Int): Int;
declare function gamepad_hat_value(device: Int, hatIndex: Int): number;
declare function gamepad_remove_mapping(device: Int): void;
declare function gamepad_test_mapping(
  device: Int,
  mapping_string: string
): void;
declare function gamepad_get_mapping(device: Int): string;
declare function gamepad_get_guid(device: Int): string;
declare function gamepad_set_option(
  gamepad_id: Int,
  option_key: string,
  option_value: any
): void;
declare function gamepad_get_option(gamepad_id: Int, option_key: string): any;
declare function layer_get_id(layer_name: string): Layer;
declare function layer_get_id_at_depth(depth: Int): Layer;
declare function layer_get_depth(layer_id: Layer | string): Int;
declare function layer_create(depth: Int, name?: string): Layer;
declare function layer_destroy(layer_id: Layer | string): void;
declare function layer_destroy_instances(layer_id: Layer | string): void;
declare function layer_add_instance<T extends any>(
  layer_id: Layer | string,
  instance: T
): void;
declare function layer_has_instance<T extends any>(
  layer_id: Layer | string,
  instance: T
): boolean;
declare function layer_set_visible(
  layer_id: Layer | string,
  visible: boolean
): void;
declare function layer_get_visible(layer_id: Layer | string): boolean;
declare function layer_exists(layer_id: Layer | string): boolean;
declare function layer_x(layer_id: Layer | string, x: number): void;
declare function layer_y(layer_id: Layer | string, y: number): void;
declare function layer_get_x(layer_id: Layer | string): number;
declare function layer_get_y(layer_id: Layer | string): number;
declare function layer_hspeed(layer_id: Layer | string, speed: number): void;
declare function layer_vspeed(layer_id: Layer | string, speed: number): void;
declare function layer_get_hspeed(layer_id: Layer | string): number;
declare function layer_get_vspeed(layer_id: Layer | string): number;
declare function layer_script_begin(
  layer_id: Layer | string,
  script: Script
): void;
declare function layer_script_end(
  layer_id: Layer | string,
  script: Script
): void;
declare function layer_shader(layer_id: Layer | string, shader: Shaders): void;
declare function layer_get_script_begin(layer_id: Layer | string): Script;
declare function layer_get_script_end(layer_id: Layer | string): Script;
declare function layer_get_shader(layer_id: Layer | string): Shaders;
declare function layer_set_target_room(room: Room): void;
declare function layer_get_target_room(): Room;
declare function layer_reset_target_room(): void;
declare function layer_get_all(): Layer[];
declare function layer_get_all_elements(
  layer_id: Layer | string
): LayerElement[];
declare function layer_get_name(layer_id: Layer | string): string;
declare function layer_depth(layer_id: Layer | string, depth: Int): void;
declare function layer_get_element_layer(element_id: LayerElement): Layer;
declare function layer_get_element_type(
  element_id: LayerElement
): LayerElementType;
declare function layer_element_move(
  element_id: LayerElement,
  layer_id: Layer | string
): void;
declare function layer_force_draw_depth(force: boolean, depth: number): void;
declare function layer_is_draw_depth_forced(): boolean;
declare function layer_get_forced_depth(): number;
declare function layer_background_get_id(
  layer_id: Layer | string
): LayerBackground;
declare function layer_background_exists(
  layer_id: Layer | string,
  background_element_id: LayerBackground
): boolean;
declare function layer_background_create(
  layer_id: Layer | string,
  Sprite: Sprite
): LayerBackground;
declare function layer_background_destroy(
  background_element_id: LayerBackground
): void;
declare function layer_background_visible(
  background_element_id: LayerBackground,
  visible: boolean
): void;
declare function layer_background_change(
  background_element_id: LayerBackground,
  Sprite: Sprite
): void;
declare function layer_background_sprite(
  background_element_id: LayerBackground,
  Sprite: Sprite
): void;
declare function layer_background_htiled(
  background_element_id: LayerBackground,
  tiled: boolean
): void;
declare function layer_background_vtiled(
  background_element_id: LayerBackground,
  tiled: boolean
): void;
declare function layer_background_stretch(
  background_element_id: LayerBackground,
  stretch: boolean
): void;
declare function layer_background_yscale(
  background_element_id: LayerBackground,
  yscale: number
): void;
declare function layer_background_xscale(
  background_element_id: LayerBackground,
  xscale: number
): void;
declare function layer_background_blend(
  background_element_id: LayerBackground,
  col: Int
): void;
declare function layer_background_alpha(
  background_element_id: LayerBackground,
  alpha: number
): void;
declare function layer_background_index(
  background_element_id: LayerBackground,
  image_index: Int
): void;
declare function layer_background_speed(
  background_element_id: LayerBackground,
  image_speed: number
): void;
declare function layer_background_get_visible(
  background_element_id: LayerBackground
): boolean;
declare function layer_background_get_sprite(
  background_element_id: LayerBackground
): Sprite;
declare function layer_background_get_htiled(
  background_element_id: LayerBackground
): boolean;
declare function layer_background_get_vtiled(
  background_element_id: LayerBackground
): boolean;
declare function layer_background_get_stretch(
  background_element_id: LayerBackground
): boolean;
declare function layer_background_get_yscale(
  background_element_id: LayerBackground
): number;
declare function layer_background_get_xscale(
  background_element_id: LayerBackground
): number;
declare function layer_background_get_blend(
  background_element_id: LayerBackground
): Int;
declare function layer_background_get_alpha(
  background_element_id: LayerBackground
): number;
declare function layer_background_get_index(
  background_element_id: LayerBackground
): Int;
declare function layer_background_get_speed(
  background_element_id: LayerBackground
): number;
declare function layer_sprite_get_id(
  layer_id: Layer | string,
  sprite_element_name: string
): LayerSprite;
declare function layer_sprite_exists(
  layer_id: Layer | string,
  sprite_element_id: LayerSprite
): boolean;
declare function layer_sprite_create(
  layer_id: Layer | string,
  x: number,
  y: any,
  Sprite: number
): LayerSprite;
declare function layer_sprite_destroy(sprite_element_id: LayerSprite): void;
declare function layer_sprite_change(
  sprite_element_id: LayerSprite,
  Sprite: Sprite
): void;
declare function layer_sprite_index(
  sprite_element_id: LayerSprite,
  image_index: Int
): void;
declare function layer_sprite_speed(
  sprite_element_id: LayerSprite,
  image_speed: number
): void;
declare function layer_sprite_xscale(
  sprite_element_id: LayerSprite,
  scale: number
): void;
declare function layer_sprite_yscale(
  sprite_element_id: LayerSprite,
  scale: number
): void;
declare function layer_sprite_angle(
  sprite_element_id: LayerSprite,
  angle: number
): void;
declare function layer_sprite_blend(
  sprite_element_id: LayerSprite,
  col: Int
): void;
declare function layer_sprite_alpha(
  sprite_element_id: LayerSprite,
  alpha: number
): void;
declare function layer_sprite_x(
  sprite_element_id: LayerSprite,
  x: number
): void;
declare function layer_sprite_y(
  sprite_element_id: LayerSprite,
  y: number
): void;
declare function layer_sprite_get_sprite(
  sprite_element_id: LayerSprite
): Sprite;
declare function layer_sprite_get_index(sprite_element_id: LayerSprite): Int;
declare function layer_sprite_get_speed(sprite_element_id: LayerSprite): number;
declare function layer_sprite_get_xscale(
  sprite_element_id: LayerSprite
): number;
declare function layer_sprite_get_yscale(
  sprite_element_id: LayerSprite
): number;
declare function layer_sprite_get_angle(sprite_element_id: LayerSprite): number;
declare function layer_sprite_get_blend(sprite_element_id: LayerSprite): Int;
declare function layer_sprite_get_alpha(sprite_element_id: LayerSprite): number;
declare function layer_sprite_get_x(sprite_element_id: LayerSprite): number;
declare function layer_sprite_get_y(sprite_element_id: LayerSprite): number;
declare function layer_tile_exists(
  layer_id: Layer | string,
  tile_element_id: LayerTileLegacy
): boolean;
declare function layer_tile_create(
  layer_id: Layer | string,
  x: number,
  y: number,
  tileset: Sprite,
  left: number,
  top: number,
  width: number,
  height: number
): LayerTileLegacy;
declare function layer_tile_destroy(tile_element_id: LayerTileLegacy): void;
declare function layer_tile_change(
  tile_element_id: LayerTileLegacy,
  Sprite: Sprite
): void;
declare function layer_tile_xscale(
  tile_element_id: LayerTileLegacy,
  scale: number
): void;
declare function layer_tile_yscale(
  tile_element_id: LayerTileLegacy,
  scale: number
): void;
declare function layer_tile_blend(
  tile_element_id: LayerTileLegacy,
  col: Int
): void;
declare function layer_tile_alpha(
  tile_element_id: LayerTileLegacy,
  alpha: number
): void;
declare function layer_tile_x(
  tile_element_id: LayerTileLegacy,
  x: number
): void;
declare function layer_tile_y(
  tile_element_id: LayerTileLegacy,
  y: number
): void;
declare function layer_tile_region(
  tile_element_id: LayerTileLegacy,
  left: number,
  top: number,
  width: number,
  height: number
): void;
declare function layer_tile_visible(
  tile_element_id: LayerTileLegacy,
  visible: boolean
): void;
declare function layer_tile_get_sprite(
  tile_element_id: LayerTileLegacy
): Sprite;
declare function layer_tile_get_xscale(
  tile_element_id: LayerTileLegacy
): number;
declare function layer_tile_get_yscale(
  tile_element_id: LayerTileLegacy
): number;
declare function layer_tile_get_blend(tile_element_id: LayerTileLegacy): Int;
declare function layer_tile_get_alpha(tile_element_id: LayerTileLegacy): number;
declare function layer_tile_get_x(tile_element_id: LayerTileLegacy): number;
declare function layer_tile_get_y(tile_element_id: LayerTileLegacy): number;
declare function layer_tile_get_region(
  tile_element_id: LayerTileLegacy
): number[];
declare function layer_tile_get_visible(
  tile_element_id: LayerTileLegacy
): boolean;
declare function layer_instance_get_instance(
  instance_element_id: LayerInstance
): any;
declare function instance_activate_layer(layer_id: Layer | string): boolean;
declare function instance_deactivate_layer(layer_id: Layer | string): boolean;
declare function layer_tilemap_get_id(layer_id: Layer | string): LayerTilemap;
declare function layer_tilemap_exists(
  layer_id: Layer | string,
  tilemap_element_id: LayerTilemap
): boolean;
declare function layer_tilemap_create(
  layer_id: Layer | string,
  x: number,
  y: number,
  tileset: Tileset,
  width: Int,
  height: Int
): LayerTilemap;
declare function layer_tilemap_destroy(tilemap_element_id: LayerTilemap): void;
declare function tilemap_tileset(
  tilemap_element_id: LayerTilemap,
  tileset: Tileset
): void;
declare function tilemap_x(tilemap_element_id: LayerTilemap, x: number): void;
declare function tilemap_y(tilemap_element_id: LayerTilemap, y: number): void;
declare function tilemap_set(
  tilemap_element_id: LayerTilemap,
  tiledata: TilemapData,
  cell_x: Int,
  cell_y: Int
): boolean;
declare function tilemap_set_at_pixel(
  tilemap_element_id: LayerTilemap,
  tiledata: TilemapData,
  x: number,
  y: number
): boolean;
declare function tileset_get_texture(tileset: Tileset): Texture;
declare function tileset_get_uvs(tileset: Tileset): Int[];
declare function tileset_get_name(tileset: Tileset): string;
declare function tilemap_get_tileset(tilemap_element_id: LayerTilemap): Tileset;
declare function tilemap_get_tile_width(tilemap_element_id: LayerTilemap): Int;
declare function tilemap_get_tile_height(tilemap_element_id: LayerTilemap): Int;
declare function tilemap_get_width(tilemap_element_id: LayerTilemap): Int;
declare function tilemap_get_height(tilemap_element_id: LayerTilemap): Int;
declare function tilemap_set_width(
  tilemap_element_id: LayerTilemap,
  width: Int
): void;
declare function tilemap_set_height(
  tilemap_element_id: LayerTilemap,
  height: Int
): void;
declare function tilemap_get_x(tilemap_element_id: LayerTilemap): number;
declare function tilemap_get_y(tilemap_element_id: LayerTilemap): number;
declare function tilemap_get(
  tilemap_element_id: LayerTilemap,
  cell_x: Int,
  cell_y: Int
): TilemapData;
declare function tilemap_get_at_pixel(
  tilemap_element_id: LayerTilemap,
  x: number,
  y: number
): TilemapData;
declare function tilemap_get_cell_x_at_pixel(
  tilemap_element_id: LayerTilemap,
  x: number,
  y: number
): Int;
declare function tilemap_get_cell_y_at_pixel(
  tilemap_element_id: LayerTilemap,
  x: number,
  y: number
): Int;
declare function tilemap_clear(
  tilemap_element_id: LayerTilemap,
  tiledata: TilemapData
): void;
declare function draw_tilemap(
  tilemap_element_id: LayerTilemap,
  x: number,
  y: number
): void;
declare function draw_tile(
  tileset: Tileset,
  tiledata: TilemapData,
  frame: number,
  x: number,
  y: number
): void;
declare function tilemap_set_global_mask(mask: TilemapData): void;
declare function tilemap_get_global_mask(): TilemapData;
declare function tilemap_set_mask(
  tilemap_element_id: LayerTilemap,
  mask: TilemapData
): void;
declare function tilemap_get_mask(
  tilemap_element_id: LayerTilemap
): TilemapData;
declare function tilemap_get_frame(tilemap_element_id: LayerTilemap): number;
declare function tile_set_empty(tiledata: TilemapData): TilemapData;
declare function tile_set_index(
  tiledata: TilemapData,
  tileindex: Int
): TilemapData;
declare function tile_set_flip(
  tiledata: TilemapData,
  flip: boolean
): TilemapData;
declare function tile_set_mirror(
  tiledata: TilemapData,
  mirror: boolean
): TilemapData;
declare function tile_set_rotate(tiledata: any, rotate: boolean): TilemapData;
declare function tile_get_empty(tiledata: TilemapData): boolean;
declare function tile_get_index(tiledata: TilemapData): Int;
declare function tile_get_flip(tiledata: TilemapData): boolean;
declare function tile_get_mirror(tiledata: TilemapData): boolean;
declare function tile_get_rotate(tiledata: TilemapData): boolean;
declare function camera_create(): Camera;
declare function camera_create_view<T extends any>(
  room_x: number,
  room_y: number,
  width: number,
  height: number,
  angle?: number,
  object?: T,
  x_speed?: number,
  y_speed?: number,
  x_border?: number,
  y_border?: number
): Camera;
declare function camera_destroy(Camera: Camera): void;
declare function camera_apply(Camera: Camera): void;
declare function camera_get_active(): Camera;
declare function camera_get_default(): Camera;
declare function camera_set_default(Camera: Camera): void;
declare function camera_set_view_mat(Camera: Camera, matrix: number[]): void;
declare function camera_set_proj_mat(Camera: Camera, matrix: number[]): void;
declare function camera_set_update_script(Camera: Camera, script: Script): void;
declare function camera_set_begin_script(Camera: Camera, script: Script): void;
declare function camera_set_end_script(Camera: Camera, script: Script): void;
declare function camera_set_view_pos(
  Camera: Camera,
  x: number,
  y: number
): void;
declare function camera_set_view_size(
  Camera: Camera,
  width: number,
  height: number
): void;
declare function camera_set_view_speed(
  Camera: Camera,
  x_speed: number,
  y_speed: number
): void;
declare function camera_set_view_border(
  Camera: Camera,
  x_border: number,
  y_border: number
): void;
declare function camera_set_view_angle(Camera: Camera, angle: number): void;
declare function camera_set_view_target<T extends any>(
  Camera: Camera,
  object: T
): void;
declare function camera_get_view_mat(Camera: Camera): number[];
declare function camera_get_proj_mat(Camera: Camera): number[];
declare function camera_get_update_script(Camera: Camera): Script;
declare function camera_get_begin_script(Camera: Camera): Script;
declare function camera_get_end_script(Camera: Camera): Script;
declare function camera_get_view_x(Camera: Camera): number;
declare function camera_get_view_y(Camera: Camera): number;
declare function camera_get_view_width(Camera: Camera): number;
declare function camera_get_view_height(Camera: Camera): number;
declare function camera_get_view_speed_x(Camera: Camera): number;
declare function camera_get_view_speed_y(Camera: Camera): number;
declare function camera_get_view_border_x(Camera: Camera): number;
declare function camera_get_view_border_y(Camera: Camera): number;
declare function camera_get_view_angle(Camera: Camera): number;
declare function camera_get_view_target(Camera: Camera): any;
declare function view_get_camera(view: Int): Camera;
declare function view_get_visible(view: Int): boolean;
declare function view_get_xport(view: Int): Int;
declare function view_get_yport(view: Int): Int;
declare function view_get_wport(view: Int): Int;
declare function view_get_hport(view: Int): Int;
declare function view_get_surface_id(view: Int): Surface;
declare function view_set_camera(view: Int, Camera: Camera): void;
declare function view_set_visible(view: Int, visible: boolean): void;
declare function view_set_xport(view: Int, xport: Int): void;
declare function view_set_yport(view: Int, yport: Int): void;
declare function view_set_wport(view: Int, wport: Int): void;
declare function view_set_hport(view: Int, hport: Int): void;
declare function view_set_surface_id(view: Int, surface_id: Surface): void;
declare function gesture_drag_time(time: number): void;
declare function gesture_drag_distance(distance: number): void;
declare function gesture_flick_speed(speed: number): void;
declare function gesture_double_tap_time(time: number): void;
declare function gesture_double_tap_distance(distance: number): void;
declare function gesture_pinch_distance(distance: number): void;
declare function gesture_pinch_angle_towards(angle: number): void;
declare function gesture_pinch_angle_away(angle: number): void;
declare function gesture_rotate_time(time: number): void;
declare function gesture_rotate_angle(angle: number): void;
declare function gesture_tap_count(enable: boolean): void;
declare function gesture_get_drag_time(): number;
declare function gesture_get_drag_distance(): number;
declare function gesture_get_flick_speed(): number;
declare function gesture_get_double_tap_time(): number;
declare function gesture_get_double_tap_distance(): number;
declare function gesture_get_pinch_distance(): number;
declare function gesture_get_pinch_angle_towards(): number;
declare function gesture_get_pinch_angle_away(): number;
declare function gesture_get_rotate_time(): number;
declare function gesture_get_rotate_angle(): number;
declare function gesture_get_tap_count(): boolean;
declare function keyboard_virtual_show(
  VirtualKeyboardType: VirtualKeyboardType,
  virtual_return_key_type: VirtualKeyboardReturnKey,
  auto_capitalization_type: VirtualKeyboardAutocapitalization,
  predictive_text_enabled: boolean
): any;
declare function keyboard_virtual_hide(): void;
declare function keyboard_virtual_status(): boolean;
declare function keyboard_virtual_height(): Int;
declare function is_real(val: any): boolean;
declare function is_numeric(val: any): boolean;
declare function is_string(val: any): boolean;
declare function is_array(val: any): boolean;
declare function is_undefined(val: any): boolean;
declare function is_int32(val: any): boolean;
declare function is_int64(val: any): boolean;
declare function is_ptr(val: any): boolean;
declare function is_bool(val: any): boolean;
declare function variable_global_exists(name: string): boolean;
declare function variable_global_get(name: string): any;
declare function variable_global_set(name: string, val: any): void;
declare function variable_instance_exists<T extends Instance>(
  id: T,
  name: string
): boolean;
declare function variable_instance_get<T extends Instance>(
  id: T,
  name: string
): any;
declare function variable_instance_set<T extends Instance>(
  id: T,
  name: string,
  val: any
): void;
declare function array_equals<T0 extends any, T1 extends any>(
  var1: T0[],
  var2: T1[]
): boolean;
declare function array_create<T extends any>(size: Int, value?: T): T[];
declare function array_copy<T extends any>(
  dest: T[],
  dest_index: Int,
  src: T[],
  src_index: Int,
  length: Int
): void;
declare function array_get<T extends any>(variable: T[], index: Int): any;
declare function array_set<T extends any>(
  variable: T[],
  index: Int,
  val: any
): void;
declare function random(x: number): number;
declare function random_range(x1: number, x2: number): number;
declare function irandom(x: Int): Int;
declare function irandom_range(x1: Int, x2: Int): Int;
declare function random_set_seed(seed: Int): void;
declare function random_get_seed(): Int;
declare function randomize(): void;
declare function randomise(): void;
declare function choose<T extends any>(...values: T[]): T;
declare function abs(x: number): number;
declare function round(x: number): Int;
declare function floor(x: number): Int;
declare function ceil(x: number): Int;
declare function sign(x: number): Int;
declare function frac(x: number): number;
declare function sqrt(x: number): number;
declare function sqr(x: number): number;
declare function exp(x: number): number;
declare function ln(x: number): number;
declare function log2(x: number): number;
declare function log10(x: number): number;
declare function sin(radian_angle: number): number;
declare function cos(radian_angle: number): number;
declare function tan(radian_angle: number): number;
declare function arcsin(x: number): number;
declare function arccos(x: number): number;
declare function arctan(x: number): number;
declare function arctan2(y: number, x: number): number;
declare function dsin(degree_angle: number): number;
declare function dcos(degree_angle: number): number;
declare function dtan(degree_angle: number): number;
declare function darcsin(x: number): number;
declare function darccos(x: number): number;
declare function darctan(x: number): number;
declare function darctan2(y: number, x: number): number;
declare function degtorad(x: number): number;
declare function radtodeg(x: number): number;
declare function power(x: number, n: number): number;
declare function logn(n: number, x: number): number;
declare function min(...values: number[]): number;
declare function max(...values: number[]): number;
declare function mean(...values: number[]): number;
declare function median(...values: number[]): number;
declare function clamp(val: number, min: number, max: number): number;
declare function lerp(val1: number, val2: number, amount: number): number;
declare function dot_product(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number;
declare function dot_product_3d(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
): number;
declare function dot_product_normalised(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number;
declare function dot_product_3d_normalised(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
): number;
declare function dot_product_normalized(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number;
declare function dot_product_3d_normalized(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
): number;
declare function math_set_epsilon(new_epsilon: number): void;
declare function math_get_epsilon(): number;
declare function angle_difference(src: number, dest: number): number;
declare function point_distance_3d(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
): number;
declare function point_distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number;
declare function point_direction(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number;
declare function lengthdir_x(len: number, dir: number): number;
declare function lengthdir_y(len: number, dir: number): number;
declare function real(val: string): number;
declare function boolean(val: number): boolean;
declare function int64(val: number | string | Pointer): Int;
declare function ptr(val: number | string): Pointer;
declare function string_format(val: number, total: Int, dec: Int): string;
declare function chr(val: Int): string;
declare function ansi_char(val: Int): string;
declare function ord(char: string): Int;
declare function string_length(str: string): Int;
declare function string_byte_length(str: string): Int;
declare function string_pos(substr: string, str: string): Int;
declare function string_copy(str: string, index: Int, count: Int): string;
declare function string_char_at(str: string, index: Int): string;
declare function string_ord_at(str: string, index: Int): Int;
declare function string_byte_at(str: string, index: Int): Int;
declare function string_set_byte_at(str: string, index: Int, val: Int): string;
declare function string_delete(str: string, index: Int, count: Int): string;
declare function string_insert(substr: string, str: string, index: Int): string;
declare function string_lower(str: string): string;
declare function string_upper(str: string): string;
declare function string_repeat(str: string, count: Int): string;
declare function string_letters(str: string): string;
declare function string_digits(str: string): string;
declare function string_lettersdigits(str: string): string;
declare function string_replace(
  str: string,
  substr: string,
  newstr: string
): string;
declare function string_replace_all(
  str: string,
  substr: string,
  newstr: string
): string;
declare function string_count(substr: string, str: string): Int;
declare function clipboard_has_text(): boolean;
declare function clipboard_set_text(str: string): void;
declare function clipboard_get_text(): string;
declare function date_current_datetime(): Datetime;
declare function date_create_datetime(
  year: Int,
  month: Int,
  day: Int,
  hour: Int,
  minute: Int,
  second: Int
): Datetime;
declare function date_valid_datetime(
  year: Int,
  month: Int,
  day: Int,
  hour: Int,
  minute: Int,
  second: Int
): boolean;
declare function date_inc_year(date: Datetime, amount: Int): Datetime;
declare function date_inc_month(date: Datetime, amount: Int): Datetime;
declare function date_inc_week(date: Datetime, amount: Int): Datetime;
declare function date_inc_day(date: Datetime, amount: Int): Datetime;
declare function date_inc_hour(date: Datetime, amount: Int): Datetime;
declare function date_inc_minute(date: Datetime, amount: Int): Datetime;
declare function date_inc_second(date: Datetime, amount: Int): Datetime;
declare function date_get_year(date: Datetime): Int;
declare function date_get_month(date: Datetime): Int;
declare function date_get_week(date: Datetime): Int;
declare function date_get_day(date: Datetime): Int;
declare function date_get_hour(date: Datetime): Int;
declare function date_get_minute(date: Datetime): Int;
declare function date_get_second(date: Datetime): Int;
declare function date_get_weekday(date: Datetime): Int;
declare function date_get_day_of_year(date: Datetime): Int;
declare function date_get_hour_of_year(date: Datetime): Int;
declare function date_get_minute_of_year(date: Datetime): Int;
declare function date_get_second_of_year(date: Datetime): Int;
declare function date_year_span(date1: Datetime, date2: Datetime): Int;
declare function date_month_span(date1: Datetime, date2: Datetime): Int;
declare function date_week_span(date1: Datetime, date2: Datetime): Int;
declare function date_day_span(date1: Datetime, date2: Datetime): Int;
declare function date_hour_span(date1: Datetime, date2: Datetime): Int;
declare function date_minute_span(date1: Datetime, date2: Datetime): Int;
declare function date_second_span(date1: Datetime, date2: Datetime): Int;
declare function date_compare_datetime(date1: Datetime, date2: Datetime): Int;
declare function date_compare_date(date1: Datetime, date2: Datetime): Int;
declare function date_compare_time(date1: Datetime, date2: Datetime): Int;
declare function date_date_of(date: Datetime): Datetime;
declare function date_time_of(date: Datetime): Datetime;
declare function date_datetime_string(date: Datetime): string;
declare function date_date_string(date: Datetime): string;
declare function date_time_string(date: Datetime): string;
declare function date_days_in_month(date: Datetime): Int;
declare function date_days_in_year(date: Datetime): Int;
declare function date_leap_year(date: Datetime): boolean;
declare function date_is_today(date: Datetime): boolean;
declare function date_set_timezone(timezone: TimezoneType): void;
declare function date_get_timezone(): TimezoneType;
declare function motion_set(dir: number, speed: number): void;
declare function motion_add(dir: number, speed: number): void;
declare function place_free(x: number, y: number): boolean;
declare function place_empty<T extends Objects | Instance>(
  x: number,
  y: number,
  obj: T
): boolean;
declare function place_meeting<T extends Objects | Instance>(
  x: number,
  y: number,
  obj: T
): boolean;
declare function place_snapped(hsnap: number, vsnap: number): boolean;
declare function move_random(hsnap: number, vsnap: number): void;
declare function move_snap(hsnap: number, vsnap: number): void;
declare function move_towards_point(x: number, y: number, sp: number): void;
declare function move_contact_solid(dir: number, maxdist: number): void;
declare function move_contact_all(dir: number, maxdist: number): void;
declare function move_outside_solid(dir: number, maxdist: number): void;
declare function move_outside_all(dir: number, maxdist: number): void;
declare function move_bounce_solid(advanced: boolean): void;
declare function move_bounce_all(advanced: boolean): void;
declare function move_wrap(hor: number, vert: number, margin: number): void;
declare function distance_to_point(x: number, y: number): number;
declare function distance_to_object<T extends Objects | Instance>(
  obj: T
): number;
declare function position_empty(x: number, y: number): boolean;
declare function position_meeting<T extends Objects | Instance>(
  x: number,
  y: number,
  obj: T
): boolean;
declare function path_start(
  path: Path,
  speed: number,
  endaction: any,
  absolute: boolean
): void;
declare function path_end(): void;
declare function mp_linear_step(
  x: number,
  y: number,
  speed: number,
  checkall: boolean
): boolean;
declare function mp_potential_step(
  x: number,
  y: number,
  speed: number,
  checkall: boolean
): boolean;
declare function mp_linear_step_object<T extends Objects | Instance>(
  x: number,
  y: number,
  speed: number,
  obj: T
): boolean;
declare function mp_potential_step_object<T extends Objects | Instance>(
  x: number,
  y: number,
  speed: number,
  obj: T
): boolean;
declare function mp_potential_settings(
  maxrot: number,
  rotstep: number,
  ahead: Int,
  onspot: boolean
): void;
declare function mp_linear_path(
  path: Path,
  xg: number,
  yg: number,
  stepsize: number,
  checkall: boolean
): boolean;
declare function mp_potential_path(
  path: Path,
  xg: number,
  yg: number,
  stepsize: number,
  factor: Int,
  checkall: boolean
): boolean;
declare function mp_linear_path_object<T extends Objects | Instance>(
  path: Path,
  xg: number,
  yg: number,
  stepsize: number,
  obj: T
): boolean;
declare function mp_potential_path_object<T extends Objects | Instance>(
  path: Path,
  xg: number,
  yg: number,
  stepsize: number,
  factor: Int,
  obj: T
): boolean;
declare function mp_grid_create(
  left: number,
  top: number,
  hcells: Int,
  vcells: Int,
  cellwidth: number,
  cellheight: number
): MpGrid;
declare function mp_grid_destroy(id: MpGrid): void;
declare function mp_grid_clear_all(id: MpGrid): void;
declare function mp_grid_clear_cell(id: MpGrid, h: Int, v: Int): void;
declare function mp_grid_clear_rectangle(
  id: MpGrid,
  left: Int,
  top: Int,
  right: Int,
  bottom: Int
): void;
declare function mp_grid_add_cell(id: MpGrid, h: Int, v: Int): void;
declare function mp_grid_get_cell(id: MpGrid, h: Int, v: Int): Int;
declare function mp_grid_add_rectangle(
  id: MpGrid,
  left: Int,
  top: Int,
  right: Int,
  bottom: Int
): void;
declare function mp_grid_add_instances<T extends Objects | Instance>(
  id: MpGrid,
  obj: T,
  prec: boolean
): void;
declare function mp_grid_path(
  id: MpGrid,
  path: Path,
  xstart: number,
  ystart: number,
  xgoal: number,
  ygoal: number,
  allowdiag: boolean
): boolean;
declare function mp_grid_draw(id: MpGrid): void;
declare function mp_grid_to_ds_grid(src: MpGrid, dest: DsGrid<number>): boolean;
declare function collision_point<T extends Objects | Instance>(
  x: number,
  y: number,
  obj: T,
  prec: boolean,
  notme: boolean
): T;
declare function collision_rectangle<T extends Objects | Instance>(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  obj: T,
  prec: boolean,
  notme: boolean
): T;
declare function collision_circle<T extends Objects | Instance>(
  x1: number,
  y1: number,
  radius: number,
  obj: T,
  prec: boolean,
  notme: boolean
): T;
declare function collision_ellipse<T extends Objects | Instance>(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  obj: T,
  prec: boolean,
  notme: boolean
): T;
declare function collision_line<T extends Objects | Instance>(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  obj: T,
  prec: boolean,
  notme: boolean
): T;
declare function point_in_rectangle(
  px: number,
  py: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): boolean;
declare function point_in_triangle(
  px: number,
  py: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number
): boolean;
declare function point_in_circle(
  px: number,
  py: number,
  cx: number,
  cy: number,
  rad: number
): boolean;
declare function rectangle_in_rectangle(
  sx1: number,
  sy1: number,
  sx2: number,
  sy2: number,
  dx1: number,
  dy1: number,
  dx2: number,
  dy2: number
): boolean;
declare function rectangle_in_triangle(
  sx1: number,
  sy1: number,
  sx2: number,
  sy2: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number
): boolean;
declare function rectangle_in_circle(
  sx1: number,
  sy1: number,
  sx2: number,
  sy2: number,
  cx: number,
  cy: number,
  rad: number
): boolean;
declare function instance_find<T extends Objects>(obj: T, n: Int): Int;
declare function instance_exists<T extends Objects | Instance>(obj: T): boolean;
declare function instance_number<T extends Objects>(obj: T): boolean;
declare function instance_position<T extends Objects | Instance>(
  x: number,
  y: number,
  obj: T
): T;
declare function instance_nearest<T extends Objects | Instance>(
  x: number,
  y: number,
  obj: T
): T;
declare function instance_furthest<T extends Objects | Instance>(
  x: number,
  y: number,
  obj: T
): T;
declare function instance_place<T extends Objects | Instance>(
  x: number,
  y: number,
  obj: T
): T;
declare function instance_create_depth<T extends Objects>(
  x: number,
  y: number,
  depth: number,
  obj: T
): T;
declare function instance_create_layer<T extends Objects>(
  x: number,
  y: number,
  layer_id_or_name: Layer | string,
  obj: T
): T;
declare function instance_copy(performevent: any): any;
declare function instance_change<T extends Objects | Instance>(
  obj: T,
  performevents: boolean
): void;
declare function instance_destroy<T extends Objects | Instance>(
  id?: T,
  execute_event_flag?: boolean
): void;
declare function position_destroy(x: number, y: number): void;
declare function position_change<T extends Objects>(
  x: number,
  y: number,
  obj: T,
  performevents: boolean
): void;
declare function instance_id_get(index: Int): any;
declare function instance_deactivate_all(notme: boolean): void;
declare function instance_deactivate_object<T extends Objects | Instance>(
  obj: T
): void;
declare function instance_deactivate_region(
  left: number,
  top: number,
  width: number,
  height: number,
  inside: boolean,
  notme: boolean
): void;
declare function instance_activate_all(): void;
declare function instance_activate_object<T extends Objects | Instance>(
  obj: T
): void;
declare function instance_activate_region(
  left: number,
  top: number,
  width: number,
  height: number,
  inside: boolean
): void;
declare function room_goto(numb: Room): void;
declare function room_goto_previous(): void;
declare function room_goto_next(): void;
declare function room_previous(numb: Room): Room;
declare function room_next(numb: Room): Room;
declare function room_restart(): void;
declare function game_end(): void;
declare function game_restart(): void;
declare function game_load(filename: string): void;
declare function game_save(filename: string): void;
declare function game_save_buffer(buffer: Buffer): void;
declare function game_load_buffer(buffer: Buffer): void;
declare function event_perform<T extends Objects>(
  type: EventType,
  numb: Int | typeof event_number | T
): void;
declare function event_user(numb: Int): void;
declare function event_perform_object<T0 extends Objects, T1 extends Objects>(
  obj: T0,
  type: EventType,
  numb: Int | typeof event_number | T1
): void;
declare function event_inherited(): void;
declare function show_debug_message(str: any): void;
declare function show_debug_overlay(enable: boolean): void;
declare function debug_event(str: string): void;
declare function alarm_get(index: Int): Int;
declare function alarm_set(index: Int, count: Int): void;
declare function keyboard_set_map(key1: Int, key2: Int): void;
declare function keyboard_get_map(key: Int): Int;
declare function keyboard_unset_map(): void;
declare function keyboard_check(key: Int): boolean;
declare function keyboard_check_pressed(key: Int): boolean;
declare function keyboard_check_released(key: Int): boolean;
declare function keyboard_check_direct(key: Int): boolean;
declare function keyboard_get_numlock(): boolean;
declare function keyboard_set_numlock(on: boolean): void;
declare function keyboard_key_press(key: Int): void;
declare function keyboard_key_release(key: Int): void;
declare function keyboard_clear(key: Int): boolean;
declare function io_clear(): void;
declare function mouse_check_button(button: typeof mouse_button): boolean;
declare function mouse_check_button_pressed(
  button: typeof mouse_button
): boolean;
declare function mouse_check_button_released(
  button: typeof mouse_button
): boolean;
declare function mouse_wheel_up(): boolean;
declare function mouse_wheel_down(): boolean;
declare function mouse_clear(button: typeof mouse_button): boolean;
declare function draw_self(): void;
declare function draw_sprite(
  Sprite: Sprite,
  subimg: number,
  x: number,
  y: number
): void;
declare function draw_sprite_pos(
  Sprite: Sprite,
  subimg: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number,
  alpha: number
): void;
declare function draw_sprite_ext(
  Sprite: Sprite,
  subimg: number,
  x: number,
  y: number,
  xscale: number,
  yscale: number,
  rot: number,
  col: Int,
  alpha: number
): void;
declare function draw_sprite_stretched(
  Sprite: Sprite,
  subimg: number,
  x: number,
  y: number,
  w: number,
  h: number
): void;
declare function draw_sprite_stretched_ext(
  Sprite: Sprite,
  subimg: number,
  x: number,
  y: number,
  w: number,
  h: number,
  col: Int,
  alpha: number
): void;
declare function draw_sprite_tiled(
  Sprite: Sprite,
  subimg: number,
  x: number,
  y: number
): void;
declare function draw_sprite_tiled_ext(
  Sprite: Sprite,
  subimg: number,
  x: number,
  y: number,
  xscale: number,
  yscale: number,
  col: Int,
  alpha: number
): void;
declare function draw_sprite_part(
  Sprite: Sprite,
  subimg: number,
  left: number,
  top: number,
  width: number,
  height: number,
  x: number,
  y: number
): void;
declare function draw_sprite_part_ext(
  Sprite: Sprite,
  subimg: number,
  left: number,
  top: number,
  width: number,
  height: number,
  x: number,
  y: number,
  xscale: number,
  yscale: number,
  col: Int,
  alpha: number
): void;
declare function draw_sprite_general(
  Sprite: Sprite,
  subimg: number,
  left: number,
  top: number,
  width: number,
  height: number,
  x: number,
  y: number,
  xscale: number,
  yscale: number,
  rot: number,
  c1: Int,
  c2: Int,
  c3: Int,
  c4: Int,
  alpha: number
): void;
declare function draw_clear(col: Int): void;
declare function draw_clear_alpha(col: Int, alpha: number): void;
declare function draw_point(x: number, y: number): void;
declare function draw_line(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): void;
declare function draw_line_width(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  w: number
): void;
declare function draw_rectangle(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  outline: boolean
): void;
declare function draw_roundrect(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  outline: number
): void;
declare function draw_roundrect_ext(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  radiusx: number,
  radiusy: number,
  outline: boolean
): void;
declare function draw_triangle(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  outline: boolean
): void;
declare function draw_circle(
  x: number,
  y: number,
  r: number,
  outline: boolean
): void;
declare function draw_ellipse(
  x1: number,
  y1: number,
  x2: number,
  y2: any,
  outline: boolean
): void;
declare function draw_set_circle_precision(precision: Int): void;
declare function draw_arrow(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  size: number
): void;
declare function draw_button(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  up: boolean
): void;
declare function draw_path(
  path: Path,
  x: number,
  y: number,
  absolute: boolean
): void;
declare function draw_healthbar(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  amount: number,
  backcol: Int,
  mincol: Int,
  maxcol: Int,
  direction: number,
  showback: boolean,
  showborder: boolean
): void;
declare function draw_getpixel(x: number, y: number): Int;
declare function draw_getpixel_ext(x: number, y: number): Int;
declare function draw_set_colour(col: Int): void;
declare function draw_set_color(col: Int): void;
declare function draw_set_alpha(alpha: number): void;
declare function draw_get_colour(): Int;
declare function draw_get_color(): Int;
declare function draw_get_alpha(): number;
declare function merge_colour(col1: Int, col2: Int, amount: number): Int;
declare function make_colour_rgb(red: Int, green: Int, blue: Int): Int;
declare function make_colour_hsv(
  hue: number,
  saturation: number,
  value: number
): Int;
declare function colour_get_red(col: Int): Int;
declare function colour_get_green(col: Int): Int;
declare function colour_get_blue(col: Int): Int;
declare function colour_get_hue(col: Int): number;
declare function colour_get_saturation(col: Int): number;
declare function colour_get_value(col: Int): number;
declare function merge_color(col1: Int, col2: Int, amount: number): any;
declare function make_color_rgb(red: Int, green: Int, blue: Int): Int;
declare function make_color_hsv(
  hue: number,
  saturation: number,
  value: number
): Int;
declare function color_get_red(col: Int): Int;
declare function color_get_green(col: Int): Int;
declare function color_get_blue(col: Int): Int;
declare function color_get_hue(col: Int): number;
declare function color_get_saturation(col: Int): number;
declare function color_get_value(col: Int): number;
declare function screen_save(fname: string): void;
declare function screen_save_part(
  fname: string,
  x: number,
  y: number,
  w: Int,
  h: Int
): void;
declare function draw_set_font(font: Font): void;
declare function draw_get_font(): Font;
declare function draw_set_halign(halign: HorizontalAlignment): void;
declare function draw_get_halign(): HorizontalAlignment;
declare function draw_set_valign(valign: VerticalAlignment): void;
declare function draw_get_valign(): VerticalAlignment;
declare function draw_text(x: number, y: number, string: string): void;
declare function draw_text_ext(
  x: number,
  y: number,
  string: string,
  sep: number,
  w: number
): void;
declare function string_width(string: string): number;
declare function string_height(string: string): number;
declare function string_width_ext(
  string: string,
  sep: number,
  w: number
): number;
declare function string_height_ext(
  string: string,
  sep: number,
  w: number
): number;
declare function draw_text_transformed(
  x: number,
  y: number,
  string: string,
  xscale: number,
  yscale: number,
  angle: number
): void;
declare function draw_text_ext_transformed(
  x: number,
  y: number,
  string: string,
  sep: number,
  w: number,
  xscale: number,
  yscale: number,
  angle: number
): void;
declare function draw_text_colour(
  x: number,
  y: number,
  string: string,
  c1: Int,
  c2: Int,
  c3: Int,
  c4: Int,
  alpha: number
): void;
declare function draw_text_ext_colour(
  x: number,
  y: number,
  string: string,
  sep: number,
  w: number,
  c1: Int,
  c2: Int,
  c3: Int,
  c4: Int,
  alpha: number
): void;
declare function draw_text_transformed_colour(
  x: number,
  y: number,
  string: string,
  xscale: number,
  yscale: number,
  angle: number,
  c1: Int,
  c2: Int,
  c3: Int,
  c4: Int,
  alpha: number
): void;
declare function draw_text_ext_transformed_colour(
  x: number,
  y: number,
  string: string,
  sep: number,
  w: number,
  xscale: number,
  yscale: number,
  angle: number,
  c1: Int,
  c2: Int,
  c3: Int,
  c4: Int,
  alpha: number
): void;
declare function draw_text_color(
  x: number,
  y: number,
  string: string,
  c1: Int,
  c2: Int,
  c3: Int,
  c4: Int,
  alpha: number
): void;
declare function draw_text_ext_color(
  x: number,
  y: number,
  string: string,
  sep: number,
  w: number,
  c1: Int,
  c2: Int,
  c3: Int,
  c4: Int,
  alpha: number
): void;
declare function draw_text_transformed_color(
  x: number,
  y: number,
  string: string,
  xscale: number,
  yscale: number,
  angle: number,
  c1: Int,
  c2: Int,
  c3: Int,
  c4: Int,
  alpha: number
): void;
declare function draw_text_ext_transformed_color(
  x: number,
  y: number,
  string: string,
  sep: number,
  w: number,
  xscale: number,
  yscale: number,
  angle: number,
  c1: Int,
  c2: Int,
  c3: Int,
  c4: Int,
  alpha: number
): void;
declare function draw_point_colour(x: number, y: number, col1: Int): void;
declare function draw_line_colour(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  col1: Int,
  col2: Int
): void;
declare function draw_line_width_colour(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  w: number,
  col1: Int,
  col2: Int
): void;
declare function draw_rectangle_colour(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  col1: Int,
  col2: Int,
  col3: Int,
  col4: Int,
  outline: boolean
): void;
declare function draw_roundrect_colour(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  col1: Int,
  col2: Int,
  outline: boolean
): void;
declare function draw_roundrect_colour_ext(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  radiusx: number,
  radiusy: number,
  col1: Int,
  col2: Int,
  outline: boolean
): void;
declare function draw_triangle_colour(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  col1: Int,
  col2: Int,
  col3: Int,
  outline: boolean
): void;
declare function draw_circle_colour(
  x: number,
  y: number,
  r: number,
  col1: Int,
  col2: Int,
  outline: boolean
): void;
declare function draw_ellipse_colour(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  col1: Int,
  col2: Int,
  outline: boolean
): void;
declare function draw_point_color(x: number, y: number, col1: Int): void;
declare function draw_line_color(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  col1: Int,
  col2: Int
): void;
declare function draw_line_width_color(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  w: number,
  col1: Int,
  col2: Int
): void;
declare function draw_rectangle_color(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  col1: Int,
  col2: Int,
  col3: Int,
  col4: Int,
  outline: boolean
): void;
declare function draw_roundrect_color(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  col1: Int,
  col2: Int,
  outline: boolean
): void;
declare function draw_roundrect_color_ext(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  radiusx: number,
  radiusy: number,
  col1: Int,
  col2: Int,
  outline: boolean
): void;
declare function draw_triangle_color(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  col1: Int,
  col2: Int,
  col3: Int,
  outline: boolean
): void;
declare function draw_circle_color(
  x: number,
  y: number,
  r: number,
  col1: Int,
  col2: Int,
  outline: boolean
): void;
declare function draw_ellipse_color(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  col1: Int,
  col2: Int,
  outline: boolean
): void;
declare function draw_primitive_begin(kind: PrimitiveType): void;
declare function draw_vertex(x: number, y: number): void;
declare function draw_vertex_colour(
  x: number,
  y: number,
  col: Int,
  alpha: number
): void;
declare function draw_vertex_color(
  x: number,
  y: number,
  col: Int,
  alpha: number
): void;
declare function draw_primitive_end(): void;
declare function sprite_get_uvs(spr: Sprite, subimg: Int): Int[];
declare function font_get_uvs(font: Font): Font[];
declare function sprite_get_texture(spr: Sprite, subimg: Int): Texture;
declare function font_get_texture(font: Font): Texture;
declare function texture_get_width(texid: Texture): Int;
declare function texture_get_height(texid: Texture): Int;
declare function texture_get_uvs(texid: Texture): Int[];
declare function draw_primitive_begin_texture(
  kind: PrimitiveType,
  texid: Texture
): void;
declare function draw_vertex_texture(
  x: number,
  y: number,
  xtex: number,
  ytex: number
): void;
declare function draw_vertex_texture_colour(
  x: number,
  y: number,
  xtex: number,
  ytex: number,
  col: Int,
  alpha: number
): void;
declare function draw_vertex_texture_color(
  x: number,
  y: number,
  xtex: number,
  ytex: number,
  col: Int,
  alpha: number
): void;
declare function texture_global_scale(pow2integer: Int): void;
declare function surface_create(w: Int, h: Int): Surface;
declare function surface_create_ext(name: string, w: Int, h: Int): Surface;
declare function surface_resize(id: Surface, width: Int, height: Int): void;
declare function surface_free(id: Surface): void;
declare function surface_exists(id: Surface): boolean;
declare function surface_get_width(id: Surface): Int;
declare function surface_get_height(id: Surface): Int;
declare function surface_get_texture(id: Surface): Texture;
declare function surface_set_target(id: Surface): void;
declare function surface_set_target_ext(index: Int, id: Surface): boolean;
declare function surface_get_target(): Surface;
declare function surface_get_target_ext(index: Int): Surface;
declare function surface_reset_target(): void;
declare function surface_depth_disable(disable: boolean): void;
declare function surface_get_depth_disable(): boolean;
declare function draw_surface(id: Surface, x: number, y: number): void;
declare function draw_surface_stretched(
  id: Surface,
  x: number,
  y: number,
  w: number,
  h: number
): void;
declare function draw_surface_tiled(id: Surface, x: number, y: number): void;
declare function draw_surface_part(
  id: Surface,
  left: number,
  top: number,
  width: number,
  height: number,
  x: number,
  y: number
): void;
declare function draw_surface_ext(
  id: Surface,
  x: number,
  y: number,
  xscale: number,
  yscale: number,
  rot: number,
  col: Int,
  alpha: number
): void;
declare function draw_surface_stretched_ext(
  id: Surface,
  x: number,
  y: number,
  w: number,
  h: number,
  col: Int,
  alpha: number
): void;
declare function draw_surface_tiled_ext(
  id: Surface,
  x: number,
  y: number,
  xscale: number,
  yscale: number,
  col: Int,
  alpha: number
): void;
declare function draw_surface_part_ext(
  id: Surface,
  left: number,
  top: number,
  width: number,
  height: number,
  x: number,
  y: number,
  xscale: number,
  yscale: number,
  col: Int,
  alpha: number
): void;
declare function draw_surface_general(
  id: Surface,
  left: number,
  top: number,
  width: number,
  height: number,
  x: number,
  y: number,
  xscale: number,
  yscale: number,
  rot: number,
  c1: Int,
  c2: Int,
  c3: Int,
  c4: Int,
  alpha: Int
): void;
declare function surface_getpixel(id: Surface, x: number, y: number): Int;
declare function surface_getpixel_ext(id: Surface, x: number, y: number): Int;
declare function surface_save(id: Surface, fname: string): void;
declare function surface_save_part(
  id: Surface,
  fname: string,
  x: number,
  y: number,
  w: Int,
  h: Int
): void;
declare function surface_copy(
  destination: Surface,
  x: number,
  y: number,
  source: Surface
): void;
declare function surface_copy_part(
  destination: Surface,
  x: number,
  y: number,
  source: Surface,
  xs: number,
  ys: number,
  ws: Int,
  hs: Int
): void;
declare function application_surface_draw_enable(on_off: boolean): void;
declare function application_get_position(): Int[];
declare function application_surface_enable(enable: boolean): void;
declare function application_surface_is_enabled(): boolean;
declare function display_get_width(): Int;
declare function display_get_height(): Int;
declare function display_get_orientation(): DisplayOrientation;
declare function display_get_gui_width(): Int;
declare function display_get_gui_height(): Int;
declare function display_reset(aa_level: Int, vsync: boolean): void;
declare function display_mouse_get_x(): number;
declare function display_mouse_get_y(): number;
declare function display_mouse_set(x: number, y: number): void;
declare function display_set_ui_visibility(flags: Int): void;
declare function window_set_fullscreen(full: boolean): void;
declare function window_get_fullscreen(): boolean;
declare function window_set_caption(caption: string): void;
declare function window_set_min_width(minwidth: Int): void;
declare function window_set_max_width(maxwidth: Int): void;
declare function window_set_min_height(minheight: Int): void;
declare function window_set_max_height(maxheight: Int): void;
declare function window_get_visible_rects(
  startx: Int,
  starty: Int,
  endx: Int,
  endy: Int
): Int[];
declare function window_get_caption(): string;
declare function window_set_cursor(cursor: WindowCursor): void;
declare function window_get_cursor(): WindowCursor;
declare function window_set_colour(colour: Int): void;
declare function window_get_colour(): Int;
declare function window_set_color(color: Int): void;
declare function window_get_color(): Int;
declare function window_set_position(x: Int, y: Int): void;
declare function window_set_size(w: Int, h: Int): void;
declare function window_set_rectangle(x: Int, y: Int, w: Int, h: Int): void;
declare function window_center(): void;
declare function window_get_x(): Int;
declare function window_get_y(): Int;
declare function window_get_width(): Int;
declare function window_get_height(): Int;
declare function window_mouse_get_x(): Int;
declare function window_mouse_get_y(): Int;
declare function window_mouse_set(x: Int, y: Int): void;
declare function window_view_mouse_get_x(id: Int): number;
declare function window_view_mouse_get_y(id: Int): number;
declare function window_views_mouse_get_x(): number;
declare function window_views_mouse_get_y(): number;
declare function audio_listener_position(x: number, y: number, z: number): void;
declare function audio_listener_velocity(
  vx: number,
  vy: number,
  vz: number
): void;
declare function audio_listener_orientation(
  lookat_x: number,
  lookat_y: number,
  lookat_z: number,
  up_x: number,
  up_y: number,
  up_z: number
): void;
declare function audio_emitter_position(
  emitterid: AudioEmitter,
  x: number,
  y: number,
  z: number
): void;
declare function audio_emitter_create(): AudioEmitter;
declare function audio_emitter_free(emitterid: AudioEmitter): void;
declare function audio_emitter_exists(emitterid: AudioEmitter): boolean;
declare function audio_emitter_pitch(
  emitterid: AudioEmitter,
  pitch: number
): void;
declare function audio_emitter_velocity(
  emitterid: AudioEmitter,
  vx: number,
  vy: number,
  vz: number
): void;
declare function audio_emitter_falloff(
  emitterid: AudioEmitter,
  falloff_ref_dist: number,
  falloff_max_dist: number,
  falloff_factor: number
): void;
declare function audio_emitter_gain(
  emitterid: AudioEmitter,
  gain: number
): void;
declare function audio_play_sound(
  soundid: Sound,
  priority: Int,
  loops: boolean
): SoundInstance;
declare function audio_play_sound_on(
  emitterid: AudioEmitter,
  soundid: Sound,
  loops: boolean,
  priority: Int
): SoundInstance;
declare function audio_play_sound_at(
  soundid: Sound,
  x: number,
  y: number,
  z: number,
  falloff_ref_dist: number,
  falloff_max_dist: number,
  falloff_factor: number,
  loops: boolean,
  priority: Int
): SoundInstance;
declare function audio_stop_sound(soundid: Sound | SoundInstance): void;
declare function audio_resume_sound(soundid: Sound | SoundInstance): void;
declare function audio_pause_sound(soundid: Sound | SoundInstance): void;
declare function audio_channel_num(numchannels: Int): void;
declare function audio_sound_length(soundid: Sound | SoundInstance): number;
declare function audio_get_type(soundid: Sound | SoundInstance): Int;
declare function audio_falloff_set_model(falloffmode: AudioFalloffModel): void;
declare function audio_master_gain(gain: number): void;
declare function audio_sound_gain(
  index: Sound | SoundInstance,
  level: number,
  time: number
): void;
declare function audio_sound_pitch(
  index: Sound | SoundInstance,
  pitch: number
): void;
declare function audio_stop_all(): void;
declare function audio_resume_all(): void;
declare function audio_pause_all(): void;
declare function audio_is_playing(soundid: Sound | SoundInstance): boolean;
declare function audio_is_paused(soundid: Sound | SoundInstance): boolean;
declare function audio_exists(soundid: Sound | SoundInstance): boolean;
declare function audio_system_is_available(): boolean;
declare function audio_sound_is_playable(soundid: Sound): boolean;
declare function audio_emitter_get_gain(emitterid: AudioEmitter): number;
declare function audio_emitter_get_pitch(emitterid: AudioEmitter): number;
declare function audio_emitter_get_x(emitterid: AudioEmitter): number;
declare function audio_emitter_get_y(emitterid: AudioEmitter): number;
declare function audio_emitter_get_z(emitterid: AudioEmitter): number;
declare function audio_emitter_get_vx(emitterid: AudioEmitter): number;
declare function audio_emitter_get_vy(emitterid: AudioEmitter): number;
declare function audio_emitter_get_vz(emitterid: AudioEmitter): number;
declare function audio_listener_set_position(
  index: Int,
  x: number,
  y: number,
  z: number
): void;
declare function audio_listener_set_velocity(
  index: Int,
  vx: number,
  vy: number,
  vz: number
): void;
declare function audio_listener_set_orientation(
  index: Int,
  lookat_x: number,
  lookat_y: number,
  lookat_z: number,
  up_x: number,
  up_y: number,
  up_z: number
): void;
declare function audio_listener_get_data(index: Int): DsMap<string, number>;
declare function audio_set_master_gain(listenerIndex: Int, gain: number): void;
declare function audio_get_master_gain(listenerIndex: Int): number;
declare function audio_sound_get_gain(index: Sound | SoundInstance): number;
declare function audio_sound_get_pitch(index: Sound | SoundInstance): number;
declare function audio_get_name(index: Sound | SoundInstance): string;
declare function audio_sound_set_track_position(
  index: Sound | SoundInstance,
  time: number
): void;
declare function audio_sound_get_track_position(
  index: Sound | SoundInstance
): number;
declare function audio_create_stream(filename: string): Sound;
declare function audio_destroy_stream(stream_sound_id: Sound): void;
declare function audio_create_sync_group(looping: boolean): SoundSyncGroup;
declare function audio_destroy_sync_group(sync_group_id: SoundSyncGroup): void;
declare function audio_play_in_sync_group(
  sync_group_id: SoundSyncGroup,
  soundid: Sound
): SoundInstance;
declare function audio_start_sync_group(sync_group_id: SoundSyncGroup): void;
declare function audio_stop_sync_group(sync_group_id: SoundSyncGroup): void;
declare function audio_pause_sync_group(sync_group_id: SoundSyncGroup): void;
declare function audio_resume_sync_group(sync_group_id: SoundSyncGroup): void;
declare function audio_sync_group_get_track_pos(
  sync_group_id: SoundSyncGroup
): number;
declare function audio_sync_group_debug(
  sync_group_id: SoundSyncGroup | Int
): void;
declare function audio_sync_group_is_playing(
  sync_group_id: SoundSyncGroup
): boolean;
declare function audio_debug(enable: boolean): void;
declare function audio_group_load(groupId: AudioGroup): boolean;
declare function audio_group_unload(groupId: AudioGroup): boolean;
declare function audio_group_is_loaded(groupId: AudioGroup): boolean;
declare function audio_group_load_progress(groupId: AudioGroup): number;
declare function audio_group_name(groupId: AudioGroup): string;
declare function audio_group_stop_all(groupId: AudioGroup): void;
declare function audio_group_set_gain(
  groupId: AudioGroup,
  volume: number,
  time: number
): void;
declare function audio_create_buffer_sound(
  bufferId: Buffer,
  format: BufferType,
  rate: Int,
  offset: Int,
  length: Int,
  channels: AudioSoundChannel
): Sound;
declare function audio_free_buffer_sound(soundId: Sound): void;
declare function audio_create_play_queue(
  bufferFormat: BufferType,
  sampleRate: Int,
  channels: AudioSoundChannel
): SoundPlayQueue;
declare function audio_free_play_queue(queueId: SoundPlayQueue): void;
declare function audio_queue_sound(
  queueId: SoundPlayQueue,
  buffer_id: Buffer,
  offset: Int,
  length: Int
): void;
declare function audio_get_recorder_count(): Int;
declare function audio_get_recorder_info(recorder_num: Int): DsMap<string, any>;
declare function audio_start_recording(recorder_num: Int): Buffer;
declare function audio_stop_recording(channel_index: Int): void;
declare function audio_sound_get_listener_mask(
  soundid: Sound | SoundInstance
): Int;
declare function audio_emitter_get_listener_mask(emitterid: AudioEmitter): Int;
declare function audio_get_listener_mask(): Int;
declare function audio_sound_set_listener_mask(
  soundid: Sound | SoundInstance,
  mask: Int
): void;
declare function audio_emitter_set_listener_mask(
  emitterid: AudioEmitter,
  mask: Int
): void;
declare function audio_set_listener_mask(mask: Int): void;
declare function audio_get_listener_count(): Int;
declare function audio_get_listener_info(index: Int): DsMap<string, any>;
declare function show_message(str: string): void;
declare function show_message_async(str: string): void;
declare function clickable_add(
  x: number,
  y: number,
  spritetpe: HtmlClickableTpe,
  URL: string,
  target: string,
  params: string
): HtmlClickable;
declare function clickable_add_ext(
  x: number,
  y: number,
  spritetpe: HtmlClickableTpe,
  URL: string,
  target: string,
  params: string,
  scale: number,
  alpha: number
): HtmlClickable;
declare function clickable_change(
  buttonid: HtmlClickable,
  spritetpe: HtmlClickableTpe,
  x: number,
  y: number
): void;
declare function clickable_change_ext(
  buttonid: HtmlClickable,
  spritetpe: HtmlClickableTpe,
  x: number,
  y: number,
  scale: number,
  alpha: number
): void;
declare function clickable_delete(buttonid: HtmlClickable): void;
declare function clickable_exists(index: HtmlClickable): boolean;
declare function clickable_set_style(
  buttonid: HtmlClickable,
  map: DsMap<string, string>
): boolean;
declare function show_question(str: string): boolean;
declare function show_question_async(str: string): Int;
declare function get_integer(str: string, def: number): number;
declare function get_string(str: string, def: string): string;
declare function get_integer_async(str: string, def: number): Int;
declare function get_string_async(str: string, def: string): Int;
declare function get_login_async(username: string, password: string): Int;
declare function get_open_filename(filter: string, fname: string): string;
declare function get_save_filename(filter: string, fname: string): string;
declare function get_open_filename_ext(
  filter: string,
  fname: string,
  dir: string,
  title: string
): string;
declare function get_save_filename_ext(
  filter: string,
  fname: string,
  dir: string,
  title: string
): string;
declare function show_error(str: string, abort: boolean): void;
declare function highscore_clear(): void;
declare function highscore_add(str: string, numb: number): void;
declare function highscore_value(place: Int): number;
declare function highscore_name(place: Int): string;
declare function draw_highscore(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): void;
declare function sprite_exists(ind: Sprite): boolean;
declare function sprite_get_name(ind: Sprite): string;
declare function sprite_get_number(ind: Sprite): Int;
declare function sprite_get_width(ind: Sprite): Int;
declare function sprite_get_height(ind: Sprite): Int;
declare function sprite_get_xoffset(ind: Sprite): number;
declare function sprite_get_yoffset(ind: Sprite): number;
declare function sprite_get_bbox_mode(ind: Sprite): BboxMode;
declare function sprite_get_bbox_left(ind: Sprite): number;
declare function sprite_get_bbox_right(ind: Sprite): number;
declare function sprite_get_bbox_top(ind: Sprite): number;
declare function sprite_get_bbox_bottom(ind: Sprite): number;
declare function sprite_set_bbox_mode(ind: Sprite, mode: BboxMode): void;
declare function sprite_set_bbox(
  ind: Sprite,
  left: number,
  top: number,
  right: number,
  bottom: number
): void;
declare function sprite_save(ind: Sprite, subimg: Int, fname: string): void;
declare function sprite_save_strip(ind: Sprite, fname: string): void;
declare function sprite_set_cache_size(ind: Sprite, max: Int): void;
declare function sprite_set_cache_size_ext(
  ind: Sprite,
  image: Int,
  max: Int
): void;
declare function sprite_get_tpe(index: any, subindex: any): HtmlClickableTpe;
declare function sprite_prefetch(ind: Sprite): Int;
declare function sprite_prefetch_multi(indarray: Sprite[]): Int;
declare function sprite_flush(ind: Sprite): Int;
declare function sprite_flush_multi(indarray: Sprite[]): Int;
declare function font_exists(ind: Font): boolean;
declare function font_get_name(ind: Font): string;
declare function font_get_fontname(ind: Font): string;
declare function font_get_bold(ind: Font): boolean;
declare function font_get_italic(ind: Font): boolean;
declare function font_get_first(ind: Font): Int;
declare function font_get_last(ind: Font): Int;
declare function font_get_size(ind: Font): Int;
declare function font_set_cache_size(font: Font, max: Int): void;
declare function path_exists(ind: Path): boolean;
declare function path_get_name(ind: Path): string;
declare function path_get_length(ind: Path): number;
declare function path_get_kind(ind: Path): boolean;
declare function path_get_closed(ind: Path): boolean;
declare function path_get_precision(ind: Path): Int;
declare function path_get_number(ind: Path): Int;
declare function path_get_point_x(ind: Path, n: Int): number;
declare function path_get_point_y(ind: Path, n: Int): number;
declare function path_get_point_speed(ind: Path, n: Int): number;
declare function path_get_x(ind: Path, pos: number): number;
declare function path_get_y(ind: Path, pos: number): number;
declare function path_get_speed(ind: Path, pos: number): number;
declare function script_exists(ind: Script): boolean;
declare function script_get_name(ind: Script): string;
declare function timeline_add(): Timeline;
declare function timeline_delete(ind: Timeline): void;
declare function timeline_clear(ind: Timeline): void;
declare function timeline_exists(ind: Timeline): boolean;
declare function timeline_get_name(ind: Timeline): string;
declare function timeline_moment_clear(ind: Timeline, step: Int): void;
declare function timeline_moment_add_script(
  ind: Timeline,
  step: Int,
  script: Script
): void;
declare function timeline_size(ind: Timeline): Int;
declare function timeline_max_moment(ind: Timeline): Int;
declare function object_exists<T extends Objects>(ind: T): boolean;
declare function object_get_name<T extends Objects>(ind: T): string;
declare function object_get_sprite<T extends Objects>(ind: T): Sprite;
declare function object_get_solid<T extends Objects>(ind: T): boolean;
declare function object_get_visible<T extends Objects>(ind: T): boolean;
declare function object_get_persistent<T extends Objects>(ind: T): boolean;
declare function object_get_mask<T extends Objects>(ind: T): Sprite;
declare function object_get_parent<T extends Objects>(ind: T): any;
declare function object_get_physics<T extends Objects>(ind: T): boolean;
declare function object_is_ancestor<T0 extends Objects, T1 extends Objects>(
  ind_child: T0,
  ind_parent: T1
): boolean;
declare function room_exists(ind: Room): boolean;
declare function room_get_name(ind: Room): string;
declare function sprite_set_offset(
  ind: Sprite,
  xoff: number,
  yoff: number
): void;
declare function sprite_duplicate(ind: Sprite): Sprite;
declare function sprite_assign(ind: Sprite, source: Sprite): void;
declare function sprite_merge(ind1: Sprite, ind2: Sprite): void;
declare function sprite_add(
  fname: string,
  imgnumb: number,
  removeback: boolean,
  smooth: boolean,
  xorig: number,
  yorig: number
): Sprite;
declare function sprite_replace(
  ind: Sprite,
  fname: string,
  imgnumb: number,
  removeback: boolean,
  smooth: boolean,
  xorig: number,
  yorig: number
): void;
declare function sprite_create_from_surface(
  id: Surface,
  x: Int,
  y: Int,
  w: Int,
  h: Int,
  removeback: boolean,
  smooth: boolean,
  xorig: number,
  yorig: number
): Sprite;
declare function sprite_add_from_surface(
  Sprite: Sprite,
  Surface: Surface,
  x: Int,
  y: Int,
  w: Int,
  h: Int,
  removeback: boolean,
  smooth: boolean
): Sprite;
declare function sprite_delete(ind: Sprite): void;
declare function sprite_set_alpha_from_sprite(ind: Sprite, spr: Sprite): void;
declare function sprite_collision_mask(
  ind: Sprite,
  sepmasks: boolean,
  bboxmode: Int,
  bbleft: number,
  bbtop: number,
  bbright: number,
  bbbottom: number,
  kind: BboxKind,
  tolerance: Int
): void;
declare function font_add_enable_aa(enable: boolean): void;
declare function font_add_get_enable_aa(): boolean;
declare function font_add(
  name: string,
  size: number,
  bold: boolean,
  italic: boolean,
  first: Int,
  last: Int
): Font;
declare function font_add_sprite(
  spr: Sprite,
  first: Int,
  prop: boolean,
  sep: number
): Font;
declare function font_add_sprite_ext(
  spr: Sprite,
  mapstring: string,
  prop: boolean,
  sep: number
): Font;
declare function font_replace(
  ind: Font,
  name: string,
  size: number,
  bold: boolean,
  italic: boolean,
  first: Int,
  last: Int
): void;
declare function font_replace_sprite(
  ind: Font,
  spr: Sprite,
  first: Int,
  prop: boolean,
  sep: number
): void;
declare function font_replace_sprite_ext(
  font: Font,
  spr: Sprite,
  mapstring: string,
  prop: boolean,
  sep: number
): void;
declare function font_delete(ind: Font): void;
declare function path_set_kind(ind: Path, kind: boolean): void;
declare function path_set_closed(ind: Path, closed: boolean): void;
declare function path_set_precision(ind: Path, prec: Int): void;
declare function path_add(): Path;
declare function path_assign(target: Path, source: Path): void;
declare function path_duplicate(ind: Path): Path;
declare function path_append(ind: Path, path: Path): void;
declare function path_delete(ind: Path): void;
declare function path_add_point(
  ind: Path,
  x: number,
  y: number,
  speed: number
): void;
declare function path_insert_point(
  ind: Path,
  n: Int,
  x: number,
  y: number,
  speed: number
): void;
declare function path_change_point(
  ind: Path,
  n: Int,
  x: number,
  y: number,
  speed: number
): void;
declare function path_delete_point(ind: Path, n: Int): void;
declare function path_clear_points(ind: Path): void;
declare function path_reverse(ind: Path): void;
declare function path_mirror(ind: Path): void;
declare function path_flip(ind: Path): void;
declare function path_rotate(ind: Path, angle: number): void;
declare function path_rescale(ind: Path, xscale: number, yscale: number): void;
declare function path_shift(ind: Path, xshift: number, yshift: number): void;
declare function script_execute(ind: Script, ...values: any[]): any;
declare function object_set_sprite<T extends Objects>(
  ind: T,
  spr: Sprite
): void;
declare function object_set_solid<T extends Objects>(
  ind: T,
  solid: boolean
): void;
declare function object_set_visible<T extends Objects>(
  ind: T,
  vis: boolean
): void;
declare function object_set_persistent<T extends Objects>(
  ind: T,
  pers: boolean
): void;
declare function object_set_mask<T extends Objects>(ind: T, spr: Sprite): void;
declare function room_set_width(ind: Room, w: number): void;
declare function room_set_height(ind: Room, h: number): void;
declare function room_set_persistent(ind: Room, pers: boolean): void;
declare function room_set_viewport(
  ind: Room,
  vind: Int,
  vis: boolean,
  xport: number,
  yport: number,
  wport: number,
  hport: number
): void;
declare function room_get_viewport(ind: Room, vind: Int): any[];
declare function room_set_view_enabled(ind: Room, val: boolean): void;
declare function room_add(): Room;
declare function room_duplicate(ind: Room): Room;
declare function room_assign(ind: Room, source: Room): void;
declare function room_instance_add<T extends Objects>(
  ind: Room,
  x: number,
  y: number,
  obj: T
): void;
declare function room_instance_clear(ind: Room): void;
declare function asset_get_index(name: string): any;
declare function asset_get_type(name: string): AssetType;
declare function file_text_open_from_string(content: string): FileHandle;
declare function file_text_open_read(fname: string): FileHandle;
declare function file_text_open_write(fname: string): FileHandle;
declare function file_text_open_append(fname: string): FileHandle;
declare function file_text_close(file: FileHandle): void;
declare function file_text_write_string(file: FileHandle, str: string): void;
declare function file_text_write_real(file: FileHandle, val: number): void;
declare function file_text_writeln(file: FileHandle): void;
declare function file_text_read_string(file: FileHandle): string;
declare function file_text_read_real(file: FileHandle): number;
declare function file_text_readln(file: FileHandle): string;
declare function file_text_eof(file: FileHandle): boolean;
declare function file_text_eoln(file: FileHandle): boolean;
declare function file_exists(fname: string): boolean;
declare function file_delete(fname: string): boolean;
declare function file_rename(oldname: string, newname: string): boolean;
declare function file_copy(fname: string, newname: string): boolean;
declare function directory_exists(dname: string): boolean;
declare function directory_create(dname: string): void;
declare function directory_destroy(dname: string): void;
declare function file_find_first(
  mask: string,
  attr: Int | FileAttribute
): string;
declare function file_find_next(): string;
declare function file_find_close(): void;
declare function file_attributes(
  fname: string,
  attr: Int | FileAttribute
): boolean;
declare function filename_name(fname: string): string;
declare function filename_path(fname: string): string;
declare function filename_dir(fname: string): string;
declare function filename_drive(fname: string): string;
declare function filename_ext(fname: string): string;
declare function filename_change_ext(fname: string, newext: string): string;
declare function file_bin_open(fname: string, mode: Int): BinaryFileHandle;
declare function file_bin_rewrite(file: BinaryFileHandle): void;
declare function file_bin_close(file: BinaryFileHandle): void;
declare function file_bin_position(file: BinaryFileHandle): Int;
declare function file_bin_size(file: BinaryFileHandle): Int;
declare function file_bin_seek(file: BinaryFileHandle, pos: Int): void;
declare function file_bin_write_byte(file: BinaryFileHandle, byte: Int): void;
declare function file_bin_read_byte(file: BinaryFileHandle): Int;
declare function parameter_count(): Int;
declare function parameter_string(n: Int): string;
declare function environment_get_variable(name: string): string;
declare function ini_open_from_string(content: string): void;
declare function ini_open(fname: string): void;
declare function ini_close(): string;
declare function ini_read_string(
  section: string,
  key: string,
  fallback: string
): string;
declare function ini_read_real(
  section: string,
  key: string,
  fallback: number
): number;
declare function ini_write_string(
  section: string,
  key: string,
  str: string
): void;
declare function ini_write_real(
  section: string,
  key: string,
  value: number
): void;
declare function ini_key_exists(section: string, key: string): boolean;
declare function ini_section_exists(section: string): boolean;
declare function ini_key_delete(section: string, key: string): void;
declare function ini_section_delete(section: string): void;
declare function ds_set_precision(prec: number): any;
declare function ds_exists(id: any, type: DsType): boolean;
declare function ds_stack_create<T = any>(): DsStack<T>;
declare function ds_stack_destroy<T extends any>(id: DsStack<T>): void;
declare function ds_stack_clear<T extends any>(id: DsStack<T>): void;
declare function ds_stack_copy<T extends any>(
  id: DsStack<T>,
  source: DsStack<T>
): void;
declare function ds_stack_size<T extends any>(id: DsStack<T>): Int;
declare function ds_stack_empty<T extends any>(id: DsStack<T>): boolean;
declare function ds_stack_push<T extends any>(
  id: DsStack<T>,
  ...values: T[]
): void;
declare function ds_stack_pop<T extends any>(id: DsStack<T>): T;
declare function ds_stack_top<T extends any>(id: DsStack<T>): T;
declare function ds_stack_write<T extends any>(id: DsStack<T>): string;
declare function ds_stack_read<T extends any>(
  id: DsStack<T>,
  str: any,
  legacy?: boolean
): void;
declare function ds_queue_create<T = any>(): DsQueue<T>;
declare function ds_queue_destroy<T extends any>(id: DsQueue<T>): void;
declare function ds_queue_clear<T extends any>(id: DsQueue<T>): void;
declare function ds_queue_copy<T extends any>(
  id: DsQueue<T>,
  source: DsQueue<T>
): void;
declare function ds_queue_size<T extends any>(id: DsQueue<T>): Int;
declare function ds_queue_empty<T extends any>(id: DsQueue<T>): boolean;
declare function ds_queue_enqueue<T extends any>(
  id: DsQueue<T>,
  ...values: T[]
): void;
declare function ds_queue_dequeue<T extends any>(id: DsQueue<T>): T;
declare function ds_queue_head<T extends any>(id: DsQueue<T>): T;
declare function ds_queue_tail<T extends any>(id: DsQueue<T>): T;
declare function ds_queue_write<T extends any>(id: DsQueue<T>): string;
declare function ds_queue_read<T extends any>(
  id: DsQueue<T>,
  str: string,
  legacy?: boolean
): void;
declare function ds_list_create<T = any>(): DsList<T>;
declare function ds_list_destroy<T extends any>(list: DsList<T>): any;
declare function ds_list_clear<T extends any>(list: DsList<T>): any;
declare function ds_list_copy<T extends any>(
  list: DsList<T>,
  source: DsList<T>
): any;
declare function ds_list_size<T extends any>(list: DsList<T>): Int;
declare function ds_list_empty<T extends any>(list: DsList<T>): boolean;
declare function ds_list_add<T extends any>(
  list: DsList<T>,
  ...values: T[]
): any;
declare function ds_list_insert<T extends any>(
  list: DsList<T>,
  pos: Int,
  value: T
): any;
declare function ds_list_replace<T extends any>(
  list: DsList<T>,
  pos: Int,
  value: T
): any;
declare function ds_list_delete<T extends any>(list: DsList<T>, pos: Int): any;
declare function ds_list_find_index<T extends any>(
  list: DsList<T>,
  value: T
): Int;
declare function ds_list_find_value<T extends any>(
  list: DsList<T>,
  pos: Int
): T;
declare function ds_list_mark_as_list<T extends any>(
  list: DsList<T>,
  pos: Int
): any;
declare function ds_list_mark_as_map<T extends any>(
  list: DsList<T>,
  pos: Int
): any;
declare function ds_list_sort<T extends any>(
  list: DsList<T>,
  ascending: boolean
): any;
declare function ds_list_shuffle<T extends any>(list: DsList<T>): any;
declare function ds_list_write<T extends any>(list: DsList<T>): string;
declare function ds_list_read<T extends any>(
  list: DsList<T>,
  str: string,
  legacy?: boolean
): any;
declare function ds_list_set<T extends any>(
  list: DsList<T>,
  pos: Int,
  value: T
): any;
declare function ds_map_create<K extends string = string, V = any>(): DsMap<
  K,
  V
>;
declare function ds_map_destroy<K extends string = string, V = any>(
  map: DsMap<K, V>
): any;
declare function ds_map_clear<K extends string = string, V = any>(
  map: DsMap<K, V>
): any;
declare function ds_map_copy<K extends string = string, V = any>(
  map: DsMap<K, V>,
  source: DsMap<K, V>
): any;
declare function ds_map_size<K extends string = string, V = any>(
  map: DsMap<K, V>
): Int;
declare function ds_map_empty<K extends string = string, V = any>(
  map: DsMap<K, V>
): boolean;
declare function ds_map_add<K extends string = string, V = any>(
  map: DsMap<K, V>,
  key: K,
  value: V
): boolean;
declare function ds_map_add_list<K extends string = string, V = any>(
  map: DsMap<K, V>,
  key: K,
  value: V
): any;
declare function ds_map_add_map<K extends string = string, V = any>(
  map: DsMap<K, V>,
  key: K,
  value: V
): any;
declare function ds_map_replace<K extends string = string, V = any>(
  map: DsMap<K, V>,
  key: K,
  value: V
): boolean;
declare function ds_map_replace_map<K extends string = string, V = any>(
  map: DsMap<K, V>,
  key: K,
  value: V
): any;
declare function ds_map_replace_list<K extends string = string, V = any>(
  map: DsMap<K, V>,
  key: K,
  value: V
): any;
declare function ds_map_delete<K extends string = string, V = any>(
  map: DsMap<K, V>,
  key: K
): any;
declare function ds_map_exists<K extends string = string, V = any>(
  map: DsMap<K, V>,
  key: K
): boolean;
declare function ds_map_find_value<K extends string = string, V = any>(
  map: DsMap<K, V>,
  key: any
): V;
declare function ds_map_find_previous<K extends string = string, V = any>(
  map: DsMap<K, V>,
  key: K
): K;
declare function ds_map_find_next<K extends string = string, V = any>(
  map: DsMap<K, V>,
  key: K
): K;
declare function ds_map_find_first<K extends string = string, V = any>(
  map: DsMap<K, V>
): K;
declare function ds_map_find_last<K extends string = string, V = any>(
  map: DsMap<K, V>
): K;
declare function ds_map_write<K extends string = string, V = any>(
  map: DsMap<K, V>
): string;
declare function ds_map_read<K extends string = string, V = any>(
  map: DsMap<K, V>,
  str: string,
  legacy?: boolean
): any;
declare function ds_map_set<K extends string = string, V = any>(
  map: DsMap<K, V>,
  key: K,
  value: V
): any;
declare function ds_map_secure_save<K extends string = string, V = any>(
  map: DsMap<K, V>,
  filename: string
): any;
declare function ds_map_secure_load<K extends string = string, V = any>(
  filename: string
): DsMap<K, V>;
declare function ds_map_secure_load_buffer<K extends string = string, V = any>(
  buffer: Buffer
): DsMap<K, V>;
declare function ds_map_secure_save_buffer<K extends string = string, V = any>(
  map: DsMap<K, V>,
  buffer: Buffer
): DsMap<K, V>;
declare function ds_priority_create<T = any>(): DsPriority<T>;
declare function ds_priority_destroy<T extends any>(id: DsPriority<T>): void;
declare function ds_priority_clear<T extends any>(id: DsPriority<T>): void;
declare function ds_priority_copy<T extends any>(
  id: DsPriority<T>,
  source: DsPriority<T>
): void;
declare function ds_priority_size<T extends any>(id: DsPriority<T>): Int;
declare function ds_priority_empty<T extends any>(id: DsPriority<T>): boolean;
declare function ds_priority_add<T extends any>(
  id: DsPriority<T>,
  value: T,
  priority: number
): void;
declare function ds_priority_change_priority<T extends any>(
  id: DsPriority<T>,
  value: T,
  priority: number
): void;
declare function ds_priority_find_priority<T extends any>(
  id: DsPriority<T>,
  value: T
): number;
declare function ds_priority_delete_value<T extends any>(
  id: DsPriority<T>,
  value: T
): void;
declare function ds_priority_delete_min<T extends any>(id: DsPriority<T>): T;
declare function ds_priority_find_min<T extends any>(id: DsPriority<T>): T;
declare function ds_priority_delete_max<T extends any>(id: DsPriority<T>): T;
declare function ds_priority_find_max<T extends any>(id: DsPriority<T>): T;
declare function ds_priority_write<T extends any>(id: DsPriority<T>): string;
declare function ds_priority_read<T extends any>(
  id: DsPriority<T>,
  str: string,
  legacy?: boolean
): void;
declare function ds_grid_create(w: Int, h: Int): DsGrid;
declare function ds_grid_destroy<T extends any>(grid: DsGrid<T>): any;
declare function ds_grid_copy<T extends any>(
  grid: DsGrid<T>,
  source: DsGrid<T>
): any;
declare function ds_grid_resize<T extends any>(
  grid: DsGrid<T>,
  w: Int,
  h: Int
): any;
declare function ds_grid_width<T extends any>(grid: DsGrid<T>): Int;
declare function ds_grid_height<T extends any>(grid: DsGrid<T>): Int;
declare function ds_grid_clear<T extends any>(grid: DsGrid<T>, val: T): any;
declare function ds_grid_add<T extends any>(
  grid: DsGrid<T>,
  x: Int,
  y: Int,
  val: T
): any;
declare function ds_grid_multiply<T extends any>(
  grid: DsGrid<T>,
  x: Int,
  y: Int,
  val: T
): any;
declare function ds_grid_set_region<T extends any>(
  grid: DsGrid<T>,
  x1: Int,
  y1: Int,
  x2: Int,
  y2: Int,
  val: T
): any;
declare function ds_grid_add_region<T extends any>(
  grid: DsGrid<T>,
  x1: Int,
  y1: Int,
  x2: Int,
  y2: Int,
  val: T
): any;
declare function ds_grid_multiply_region<T extends any>(
  grid: DsGrid<T>,
  x1: Int,
  y1: Int,
  x2: Int,
  y2: Int,
  val: T
): any;
declare function ds_grid_set_disk<T extends any>(
  grid: DsGrid<T>,
  xm: number,
  ym: number,
  r: number,
  val: T
): any;
declare function ds_grid_add_disk<T extends any>(
  grid: DsGrid<T>,
  xm: number,
  ym: number,
  r: number,
  val: T
): any;
declare function ds_grid_multiply_disk<T extends any>(
  grid: DsGrid<T>,
  xm: number,
  ym: number,
  r: number,
  val: T
): any;
declare function ds_grid_set_grid_region<T extends any>(
  grid: DsGrid<T>,
  source: any,
  x1: Int,
  y1: Int,
  x2: Int,
  y2: Int,
  xpos: any,
  ypos: any
): any;
declare function ds_grid_add_grid_region<T extends any>(
  grid: DsGrid<T>,
  source: any,
  x1: Int,
  y1: Int,
  x2: Int,
  y2: Int,
  xpos: any,
  ypos: any
): any;
declare function ds_grid_multiply_grid_region<T extends any>(
  grid: DsGrid<T>,
  source: any,
  x1: Int,
  y1: Int,
  x2: Int,
  y2: Int,
  xpos: any,
  ypos: any
): any;
declare function ds_grid_get_sum<T extends any>(
  grid: DsGrid<T>,
  x1: Int,
  y1: Int,
  x2: Int,
  y2: Int
): T;
declare function ds_grid_get_max<T extends any>(
  grid: DsGrid<T>,
  x1: Int,
  y1: Int,
  x2: Int,
  y2: Int
): T;
declare function ds_grid_get_min<T extends any>(
  grid: DsGrid<T>,
  x1: Int,
  y1: Int,
  x2: Int,
  y2: Int
): T;
declare function ds_grid_get_mean<T extends any>(
  grid: DsGrid<T>,
  x1: Int,
  y1: Int,
  x2: Int,
  y2: Int
): T;
declare function ds_grid_get_disk_sum<T extends any>(
  grid: DsGrid<T>,
  xm: number,
  ym: number,
  r: number
): T;
declare function ds_grid_get_disk_min<T extends any>(
  grid: DsGrid<T>,
  xm: number,
  ym: number,
  r: number
): T;
declare function ds_grid_get_disk_max<T extends any>(
  grid: DsGrid<T>,
  xm: number,
  ym: number,
  r: number
): T;
declare function ds_grid_get_disk_mean<T extends any>(
  grid: DsGrid<T>,
  xm: number,
  ym: number,
  r: number
): T;
declare function ds_grid_value_exists<T extends any>(
  grid: DsGrid<T>,
  x1: Int,
  y1: Int,
  x2: Int,
  y2: Int,
  val: T
): boolean;
declare function ds_grid_value_x<T extends any>(
  grid: DsGrid<T>,
  x1: Int,
  y1: Int,
  x2: Int,
  y2: Int,
  val: T
): Int;
declare function ds_grid_value_y<T extends any>(
  grid: DsGrid<T>,
  x1: Int,
  y1: Int,
  x2: Int,
  y2: Int,
  val: T
): Int;
declare function ds_grid_value_disk_exists<T extends any>(
  grid: DsGrid<T>,
  xm: number,
  ym: number,
  r: number,
  val: T
): boolean;
declare function ds_grid_value_disk_x<T extends any>(
  grid: DsGrid<T>,
  xm: number,
  ym: number,
  r: number,
  val: T
): Int;
declare function ds_grid_value_disk_y<T extends any>(
  grid: DsGrid<T>,
  xm: number,
  ym: number,
  r: number,
  val: T
): Int;
declare function ds_grid_shuffle<T extends any>(grid: DsGrid<T>): any;
declare function ds_grid_write<T extends any>(grid: DsGrid<T>): string;
declare function ds_grid_read<T extends any>(
  grid: DsGrid<T>,
  str: string,
  legacy?: boolean
): any;
declare function ds_grid_sort<T extends any>(
  grid: DsGrid<T>,
  column: Int,
  ascending: boolean
): any;
declare function ds_grid_set<T extends any>(
  grid: DsGrid<T>,
  x: Int,
  y: Int,
  value: T
): any;
declare function ds_grid_get<T extends any>(
  grid: DsGrid<T>,
  x: Int,
  y: any
): any;
declare function effect_create_below(
  kind: EffectKind,
  x: number,
  y: number,
  size: Int,
  col: Int
): void;
declare function effect_create_above(
  kind: EffectKind,
  x: number,
  y: number,
  size: Int,
  col: Int
): void;
declare function effect_clear(): any;
declare function part_type_create(): Particle;
declare function part_type_destroy(ind: Particle): void;
declare function part_type_exists(ind: Particle): boolean;
declare function part_type_clear(ind: Particle): void;
declare function part_type_shape(ind: Particle, shape: ParticleShape): void;
declare function part_type_sprite(
  ind: Particle,
  Sprite: Sprite,
  animat: boolean,
  stretch: boolean,
  random: boolean
): void;
declare function part_type_size(
  ind: Particle,
  size_min: number,
  size_max: number,
  size_incr: number,
  size_wiggle: number
): void;
declare function part_type_scale(
  ind: Particle,
  xscale: number,
  yscale: number
): void;
declare function part_type_orientation(
  ind: Particle,
  ang_min: number,
  ang_max: number,
  ang_incr: number,
  ang_wiggle: number,
  ang_relative: boolean
): void;
declare function part_type_life(
  ind: Particle,
  life_min: number,
  life_max: number
): void;
declare function part_type_step(
  ind: Particle,
  step_number: Int,
  step_type: Particle
): void;
declare function part_type_death(
  ind: Particle,
  death_number: Int,
  death_type: Particle
): void;
declare function part_type_speed(
  ind: Particle,
  speed_min: number,
  speed_max: number,
  speed_incr: number,
  speed_wiggle: number
): void;
declare function part_type_direction(
  ind: Particle,
  dir_min: number,
  dir_max: number,
  dir_incr: number,
  dir_wiggle: number
): void;
declare function part_type_gravity(
  ind: Particle,
  grav_amount: number,
  grav_dir: number
): void;
declare function part_type_colour1(ind: Particle, colour1: Int): void;
declare function part_type_colour2(
  ind: Particle,
  colour1: Int,
  colour2: Int
): void;
declare function part_type_colour3(
  ind: Particle,
  colour1: Int,
  colour2: Int,
  colour3: Int
): void;
declare function part_type_colour_mix(
  ind: Particle,
  colour1: Int,
  colour2: Int
): void;
declare function part_type_colour_rgb(
  ind: Particle,
  rmin: Int,
  rmax: Int,
  gmin: Int,
  gmax: Int,
  bmin: Int,
  bmax: Int
): void;
declare function part_type_colour_hsv(
  ind: Particle,
  hmin: number,
  hmax: number,
  smin: number,
  smax: number,
  vmin: number,
  vmax: number
): void;
declare function part_type_color1(ind: Particle, color1: Int): void;
declare function part_type_color2(
  ind: Particle,
  color1: Int,
  color2: Int
): void;
declare function part_type_color3(
  ind: Particle,
  color1: Int,
  color2: Int,
  color3: Int
): void;
declare function part_type_color_mix(
  ind: Particle,
  color1: Int,
  color2: Int
): void;
declare function part_type_color_rgb(
  ind: Particle,
  rmin: Int,
  rmax: Int,
  gmin: Int,
  gmax: Int,
  bmin: Int,
  bmax: Int
): void;
declare function part_type_color_hsv(
  ind: Particle,
  hmin: number,
  hmax: number,
  smin: number,
  smax: number,
  vmin: number,
  vmax: number
): void;
declare function part_type_alpha1(ind: Particle, alpha1: number): void;
declare function part_type_alpha2(
  ind: Particle,
  alpha1: number,
  alpha2: number
): void;
declare function part_type_alpha3(
  ind: Particle,
  alpha1: number,
  alpha2: number,
  alpha3: number
): void;
declare function part_type_blend(ind: Particle, additive: boolean): void;
declare function part_system_create(): ParticleSystem;
declare function part_system_create_layer(
  Layer: Layer | string,
  persistent: boolean
): ParticleSystem;
declare function part_system_destroy(ind: ParticleSystem): void;
declare function part_system_exists(ind: ParticleSystem): boolean;
declare function part_system_clear(ind: ParticleSystem): void;
declare function part_system_draw_order(
  ind: ParticleSystem,
  oldtonew: boolean
): void;
declare function part_system_depth(ind: ParticleSystem, depth: number): void;
declare function part_system_position(
  ind: ParticleSystem,
  x: number,
  y: number
): void;
declare function part_system_automatic_update(
  ind: ParticleSystem,
  automatic: boolean
): void;
declare function part_system_automatic_draw(
  ind: ParticleSystem,
  draw: boolean
): void;
declare function part_system_update(ind: ParticleSystem): void;
declare function part_system_drawit(ind: ParticleSystem): void;
declare function part_system_get_layer(ind: ParticleSystem): Layer;
declare function part_system_layer(
  ind: ParticleSystem,
  Layer: Layer | string
): void;
declare function part_particles_create(
  ind: ParticleSystem,
  x: number,
  y: number,
  parttype: Particle,
  number: Int
): void;
declare function part_particles_create_colour(
  ind: ParticleSystem,
  x: number,
  y: number,
  parttype: Particle,
  colour: Int,
  number: Int
): void;
declare function part_particles_create_color(
  ind: ParticleSystem,
  x: number,
  y: number,
  parttype: Particle,
  color: Int,
  number: Int
): void;
declare function part_particles_clear(ind: ParticleSystem): void;
declare function part_particles_count(ind: ParticleSystem): Int;
declare function part_emitter_create(ps: ParticleSystem): ParticleEmitter;
declare function part_emitter_destroy(
  ps: ParticleSystem,
  emitter: ParticleEmitter
): void;
declare function part_emitter_destroy_all(ps: ParticleSystem): void;
declare function part_emitter_exists(
  ps: ParticleSystem,
  ind: ParticleEmitter
): boolean;
declare function part_emitter_clear(
  ps: ParticleSystem,
  ind: ParticleEmitter
): void;
declare function part_emitter_region(
  ps: ParticleSystem,
  ind: ParticleEmitter,
  xmin: number,
  xmax: number,
  ymin: number,
  ymax: number,
  shape: ParticleRegionShape,
  distribution: ParticleDistribution
): void;
declare function part_emitter_burst(
  ps: ParticleSystem,
  ind: ParticleEmitter,
  parttype: Particle,
  number: Int
): void;
declare function part_emitter_stream(
  ps: ParticleSystem,
  ind: ParticleEmitter,
  parttype: Particle,
  number: Int
): void;
declare function external_define(
  dll_path: string,
  func_name: string,
  calltype: ExternalCallType,
  restype: ExternalValueType,
  argnumb: number,
  ...argtypes: ExternalValueType[]
): ExternalFunction;
declare function external_call(
  func: ExternalFunction,
  ...arguments: undefined[]
): any;
declare function external_free(dllname: string): any;
declare function window_handle(): Pointer;
declare function window_device(): Pointer;
declare function matrix_get(type: MatrixType): number[];
declare function matrix_set(type: MatrixType, matrix: number[]): void;
declare function matrix_build(
  x: number,
  y: number,
  z: number,
  xrotation: number,
  yrotation: number,
  zrotation: number,
  xscale: number,
  yscale: number,
  zscale: number
): number[];
declare function matrix_multiply(
  matrix1: number[],
  matrix2: number[]
): number[];
declare function browser_input_capture(enable: boolean): void;
declare function os_get_config(): string;
declare function os_get_info(): DsMap<string, any>;
declare function os_get_language(): string;
declare function os_get_region(): string;
declare function os_check_permission(
  permission: string
): AndroidPermissionState;
declare function os_request_permission(permission: string): void;
declare function os_lock_orientation(flag: boolean): void;
declare function display_get_dpi_x(): number;
declare function display_get_dpi_y(): number;
declare function display_set_gui_size(width: number, height: number): void;
declare function display_set_gui_maximise(
  xscale?: number,
  yscale?: number,
  xoffset?: number,
  yoffset?: number
): void;
declare function display_set_gui_maximize(
  xscale?: number,
  yscale?: number,
  xoffset?: number,
  yoffset?: number
): void;
declare function device_mouse_dbclick_enable(enable: boolean): void;
declare function virtual_key_add(
  x: number,
  y: number,
  w: number,
  h: number,
  keycode: Int
): VirtualKey;
declare function virtual_key_hide(id: VirtualKey): void;
declare function virtual_key_delete(id: VirtualKey): void;
declare function virtual_key_show(id: VirtualKey): void;
declare function draw_enable_drawevent(enable: boolean): void;
declare function draw_enable_swf_aa(enable: boolean): void;
declare function draw_set_swf_aa_level(aa_level: number): void;
declare function draw_get_swf_aa_level(): number;
declare function draw_texture_flush(): void;
declare function draw_flush(): void;
declare function shop_leave_rating(
  text_string: string,
  yes_string: string,
  no_string: string,
  url: string
): void;
declare function url_get_domain(): string;
declare function url_open(url: string): void;
declare function url_open_ext(url: string, target: string): void;
declare function url_open_full(
  url: string,
  target: string,
  options: string
): void;
declare function get_timer(): Int;
declare function achievement_login(): void;
declare function achievement_logout(): void;
declare function achievement_post(
  achievement_name: string,
  value: number
): void;
declare function achievement_increment(
  achievement_name: string,
  value: number
): void;
declare function achievement_post_score(
  score_name: string,
  value: number
): void;
declare function achievement_available(): boolean;
declare function achievement_show_achievements(): boolean;
declare function achievement_show_leaderboards(): boolean;
declare function achievement_load_friends(): boolean;
declare function achievement_load_leaderboard(
  ident: string,
  minindex: Int,
  maxindex: Int,
  filter: AchievementLeaderboardFilter
): void;
declare function achievement_send_challenge(
  to: string,
  challengeid: string,
  score: number,
  type: AchievementChallengeType,
  msg: string
): void;
declare function achievement_load_progress(): void;
declare function achievement_reset(): void;
declare function achievement_login_status(): boolean;
declare function achievement_get_pic(char: string): void;
declare function achievement_show_challenge_notifications(
  receive_challenge: boolean,
  local_complete: boolean,
  remote_complete: boolean
): void;
declare function achievement_get_challenges(): void;
declare function achievement_event(stringid: string): void;
declare function achievement_show(type: AchievementShowType, val: any): void;
declare function achievement_get_info(userid: string): void;
declare function cloud_file_save(filename: string, description: string): Int;
declare function cloud_string_save(data: string, description: string): Int;
declare function cloud_synchronise(): Int;
declare function device_get_tilt_x(): number;
declare function device_get_tilt_y(): number;
declare function device_get_tilt_z(): number;
declare function device_is_keypad_open(): boolean;
declare function device_mouse_check_button(
  device: Int,
  button: typeof mouse_button
): boolean;
declare function device_mouse_check_button_pressed(
  device: Int,
  button: typeof mouse_button
): boolean;
declare function device_mouse_check_button_released(
  device: Int,
  button: typeof mouse_button
): boolean;
declare function device_mouse_x(device: Int): number;
declare function device_mouse_y(device: Int): number;
declare function device_mouse_raw_x(device: Int): number;
declare function device_mouse_raw_y(device: Int): number;
declare function device_mouse_x_to_gui(device: Int): number;
declare function device_mouse_y_to_gui(device: Int): number;
declare function iap_activate(ds_list: DsList<DsMap<string, any>>): void;
declare function iap_status(): IapSystemStatus;
declare function iap_enumerate_products(
  ds_list: DsList<DsMap<string, any>>
): void;
declare function iap_restore_all(): void;
declare function iap_acquire(product_id: string, payload: string): Int;
declare function iap_consume(product_id: string): void;
declare function iap_product_details(
  product_id: string,
  ds_map: DsMap<string, any>
): void;
declare function iap_purchase_details(
  purchase_id: string,
  ds_map: DsMap<string, any>
): void;
declare function gamepad_is_supported(): boolean;
declare function gamepad_get_device_count(): Int;
declare function gamepad_is_connected(device: Int): boolean;
declare function gamepad_get_description(device: Int): string;
declare function gamepad_get_button_threshold(device: Int): number;
declare function gamepad_set_button_threshold(
  device: Int,
  threshold: number
): void;
declare function gamepad_get_axis_deadzone(device: Int): number;
declare function gamepad_set_axis_deadzone(device: Int, deadzone: number): void;
declare function gamepad_button_count(device: Int): Int;
declare function gamepad_button_check(
  device: Int,
  buttonIndex: GamepadButton
): boolean;
declare function gamepad_button_check_pressed(
  device: Int,
  buttonIndex: GamepadButton
): boolean;
declare function gamepad_button_check_released(
  device: Int,
  buttonIndex: GamepadButton
): boolean;
declare function gamepad_button_value(
  device: Int,
  buttonIndex: GamepadButton
): number;
declare function gamepad_axis_count(device: Int): Int;
declare function gamepad_axis_value(
  device: Int,
  axisIndex: GamepadButton
): number;
declare function gamepad_set_vibration(
  device: Int,
  leftMotorSpeed: number,
  rightMotorSpeed: number
): void;
declare function gamepad_set_colour(index: Int, colour: Int): void;
declare function gamepad_set_color(index: Int, color: Int): void;
declare function os_is_paused(): boolean;
declare function window_has_focus(): boolean;
declare function code_is_compiled(): boolean;
declare function http_get(url: string): Int;
declare function http_get_file(url: string, dest: string): Int;
declare function http_post_string(url: string, string: string): Int;
declare function http_request(
  url: string,
  method: string,
  header_map: DsMap<string, string>,
  body: string
): Int;
declare function http_get_request_crossorigin(): string;
declare function http_set_request_crossorigin(crossorigin_type: string): void;
declare function json_encode(ds_map: DsMap<string, any>): string;
declare function json_decode(string: string): DsMap<string, any>;
declare function zip_unzip(file: string, destPath: string): Int;
declare function load_csv(filename: string): DsGrid<string>;
declare function base64_encode(string: string): string;
declare function base64_decode(string: string): string;
declare function md5_string_unicode(string: string): string;
declare function md5_string_utf8(string: string): string;
declare function md5_file(fname: string): string;
declare function sha1_string_unicode(string: string): string;
declare function sha1_string_utf8(string: string): string;
declare function sha1_file(fname: string): string;
declare function os_is_network_connected(attempt_connection?: boolean): boolean;
declare function os_powersave_enable(enable: boolean): void;
declare function physics_world_create(PixelToMetreScale: number): void;
declare function physics_world_gravity(gx: number, gy: number): void;
declare function physics_world_update_speed(speed: Int): void;
declare function physics_world_update_iterations(iterations: Int): void;
declare function physics_world_draw_debug(draw_flags: PhysicsDebugFlag): void;
declare function physics_pause_enable(pause: boolean): void;
declare function physics_fixture_create(): PhysicsFixture;
declare function physics_fixture_set_kinematic(fixture: PhysicsFixture): void;
declare function physics_fixture_set_density(
  fixture: PhysicsFixture,
  density: number
): void;
declare function physics_fixture_set_awake(
  fixture: PhysicsFixture,
  awake: boolean
): void;
declare function physics_fixture_set_restitution(
  fixture: PhysicsFixture,
  restitution: number
): void;
declare function physics_fixture_set_friction(
  fixture: PhysicsFixture,
  friction: number
): void;
declare function physics_fixture_set_collision_group(
  fixture: PhysicsFixture,
  group: Int
): void;
declare function physics_fixture_set_sensor(
  fixture: PhysicsFixture,
  is_sensor: boolean
): void;
declare function physics_fixture_set_linear_damping(
  fixture: PhysicsFixture,
  damping: number
): void;
declare function physics_fixture_set_angular_damping(
  fixture: PhysicsFixture,
  damping: number
): void;
declare function physics_fixture_set_circle_shape(
  fixture: PhysicsFixture,
  circleRadius: number
): void;
declare function physics_fixture_set_box_shape(
  fixture: PhysicsFixture,
  halfWidth: number,
  halfHeight: number
): void;
declare function physics_fixture_set_edge_shape(
  fixture: PhysicsFixture,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): void;
declare function physics_fixture_set_polygon_shape(
  fixture: PhysicsFixture
): void;
declare function physics_fixture_set_chain_shape(
  fixture: PhysicsFixture,
  loop: boolean
): void;
declare function physics_fixture_add_point(
  fixture: PhysicsFixture,
  local_x: number,
  local_y: number
): void;
declare function physics_fixture_bind<T extends Instance | Objects>(
  fixture: PhysicsFixture,
  obj: T
): PhysicsFixture;
declare function physics_fixture_bind_ext<T extends Instance | Objects>(
  fixture: PhysicsFixture,
  obj: T,
  xo: number,
  yo: number
): PhysicsFixture;
declare function physics_fixture_delete(fixture: PhysicsFixture): void;
declare function physics_apply_force(
  xpos: number,
  ypos: number,
  xforce: number,
  yforce: number
): void;
declare function physics_apply_impulse(
  xpos: number,
  ypos: number,
  ximpulse: number,
  yimpulse: number
): void;
declare function physics_apply_angular_impulse(impulse: number): void;
declare function physics_apply_local_force(
  xlocal: number,
  ylocal: number,
  xforce_local: number,
  yforce_local: number
): void;
declare function physics_apply_local_impulse(
  xlocal: number,
  ylocal: number,
  ximpulse_local: number,
  yimpulse_local: number
): void;
declare function physics_apply_torque(torque: number): void;
declare function physics_mass_properties(
  mass: number,
  local_centre_of_mass_x: number,
  local_centre_of_mass_y: number,
  inertia: number
): void;
declare function physics_draw_debug(): void;
declare function physics_test_overlap<T extends Instance | Objects>(
  x: number,
  y: number,
  angle: number,
  obj: T
): boolean;
declare function physics_remove_fixture<T extends any>(
  inst: T,
  id: PhysicsFixture
): void;
declare function physics_set_friction(
  fixture: PhysicsFixture,
  friction: number
): void;
declare function physics_set_density(
  fixture: PhysicsFixture,
  density: number
): void;
declare function physics_set_restitution(
  fixture: PhysicsFixture,
  restitution: number
): void;
declare function physics_get_friction(fixture: PhysicsFixture): number;
declare function physics_get_density(fixture: PhysicsFixture): number;
declare function physics_get_restitution(fixture: PhysicsFixture): number;
declare function physics_joint_distance_create<
  T0 extends Instance,
  T1 extends Instance
>(
  inst1: T0,
  inst2: T1,
  anchor_1_x: number,
  anchor_1_y: number,
  anchor_2_x: number,
  anchor_2_y: number,
  collideInstances: boolean
): PhysicsJoint;
declare function physics_joint_rope_create<
  T0 extends Instance,
  T1 extends Instance
>(
  inst1: T0,
  inst2: T1,
  anchor_1_x: number,
  anchor_1_y: number,
  anchor_2_x: number,
  anchor_2_y: number,
  maxLength: number,
  collideInstances: boolean
): PhysicsJoint;
declare function physics_joint_revolute_create<
  T0 extends Instance,
  T1 extends Instance
>(
  inst1: T0,
  inst2: T1,
  anchor_x: number,
  anchor_y: number,
  lower_angle_limit: number,
  upper_angle_limit: number,
  enable_limit: number,
  max_motor_torque: number,
  motor_speed: number,
  enable_motor: boolean,
  collideInstances: boolean
): PhysicsJoint;
declare function physics_joint_prismatic_create<
  T0 extends Instance,
  T1 extends Instance
>(
  inst1: T0,
  inst2: T1,
  anchor_x: number,
  anchor_y: number,
  axis_x: number,
  axis_y: number,
  lower_translation_limit: number,
  upper_translation_limit: number,
  enable_limit: boolean,
  max_motor_force: number,
  motor_speed: number,
  enable_motor: boolean,
  collideInstances: boolean
): PhysicsJoint;
declare function physics_joint_pulley_create<
  T0 extends Instance,
  T1 extends Instance
>(
  inst1: T0,
  inst2: T1,
  anchor_1_x: number,
  anchor_1_y: number,
  anchor_2_x: number,
  anchor_2_y: number,
  local_anchor_1_x: number,
  local_anchor_1_y: number,
  local_anchor_2_x: number,
  local_anchor_2_y: number,
  ratio: number,
  collideInstances: boolean
): PhysicsJoint;
declare function physics_joint_wheel_create<
  T0 extends Instance,
  T1 extends Instance
>(
  inst1: T0,
  inst2: T1,
  anchor_x: number,
  anchor_y: number,
  axis_x: number,
  axis_y: number,
  enableMotor: boolean,
  max_motor_torque: number,
  motor_speed: number,
  freq_hz: number,
  damping_ratio: number,
  collideInstances: boolean
): PhysicsJoint;
declare function physics_joint_weld_create<
  T0 extends Instance,
  T1 extends Instance
>(
  inst1: T0,
  inst2: T1,
  anchor_x: number,
  anchor_y: number,
  ref_angle: number,
  freq_hz: number,
  damping_ratio: number,
  collideInstances: boolean
): PhysicsJoint;
declare function physics_joint_friction_create<
  T0 extends Instance,
  T1 extends Instance
>(
  inst1: T0,
  inst2: T1,
  anchor_x: number,
  anchor_y: number,
  max_force: number,
  max_torque: number,
  collideInstances: boolean
): PhysicsJoint;
declare function physics_joint_gear_create<
  T0 extends Instance,
  T1 extends Instance
>(
  inst1: T0,
  inst2: T1,
  revoluteJoint: PhysicsJoint,
  prismaticJoint: PhysicsJoint,
  ratio: number
): PhysicsJoint;
declare function physics_joint_enable_motor(
  joint: PhysicsJoint,
  motorState: boolean
): void;
declare function physics_joint_get_value(
  joint: PhysicsJoint,
  field: PhysicsJointValue
): number | boolean;
declare function physics_joint_set_value(
  joint: PhysicsJoint,
  field: PhysicsJointValue,
  value: number | boolean
): PhysicsJointValue;
declare function physics_joint_delete(joint: PhysicsJoint): void;
declare function physics_particle_create(
  typeflags: PhysicsParticleFlag,
  x: number,
  y: number,
  xv: number,
  yv: number,
  col: Int,
  alpha: number,
  category: Int
): PhysicsParticle;
declare function physics_particle_delete(ind: PhysicsParticle): void;
declare function physics_particle_delete_region_circle(
  x: number,
  y: number,
  radius: number
): void;
declare function physics_particle_delete_region_box(
  x: number,
  y: number,
  halfWidth: number,
  halfHeight: number
): void;
declare function physics_particle_delete_region_poly(
  pointList: DsList<number>
): void;
declare function physics_particle_set_flags(
  ind: PhysicsParticle,
  typeflags: PhysicsParticleFlag
): void;
declare function physics_particle_set_category_flags(
  category: Int,
  typeflags: PhysicsParticleFlag
): void;
declare function physics_particle_draw(
  typemask: PhysicsParticleFlag,
  category: Int,
  Sprite: Sprite,
  subimg: Int
): void;
declare function physics_particle_draw_ext(
  typemask: PhysicsParticleFlag,
  category: Int,
  Sprite: Sprite,
  subimg: Int,
  xscale: number,
  yscale: number,
  angle: number,
  col: Int,
  alpha: number
): void;
declare function physics_particle_count(): Int;
declare function physics_particle_get_data(
  buffer: Buffer,
  dataFlags: PhysicsParticleDataFlag
): void;
declare function physics_particle_get_data_particle(
  ind: PhysicsParticle,
  buffer: Buffer,
  dataFlags: PhysicsParticleDataFlag
): void;
declare function physics_particle_group_begin(
  typeflags: PhysicsParticleFlag,
  groupflags: PhysicsParticleGroupFlag,
  x: number,
  y: number,
  ang: number,
  xv: number,
  yv: number,
  angVelocity: number,
  col: Int,
  alpha: number,
  strength: number,
  category: Int
): void;
declare function physics_particle_group_circle(radius: number): void;
declare function physics_particle_group_box(
  halfWidth: number,
  halfHeight: number
): void;
declare function physics_particle_group_polygon(): void;
declare function physics_particle_group_add_point(x: number, y: number): void;
declare function physics_particle_group_end(): PhysicsParticleGroup;
declare function physics_particle_group_join(
  to: PhysicsParticleGroup,
  from: PhysicsParticleGroup
): void;
declare function physics_particle_group_delete(ind: PhysicsParticleGroup): void;
declare function physics_particle_group_count(group: PhysicsParticleGroup): Int;
declare function physics_particle_group_get_data(
  group: PhysicsParticleGroup,
  buffer: Buffer,
  dataFlags: PhysicsParticleDataFlag
): void;
declare function physics_particle_group_get_mass(
  group: PhysicsParticleGroup
): number;
declare function physics_particle_group_get_inertia(
  group: PhysicsParticleGroup
): number;
declare function physics_particle_group_get_centre_x(
  group: PhysicsParticleGroup
): number;
declare function physics_particle_group_get_centre_y(
  group: PhysicsParticleGroup
): number;
declare function physics_particle_group_get_vel_x(
  group: PhysicsParticleGroup
): number;
declare function physics_particle_group_get_vel_y(
  group: PhysicsParticleGroup
): number;
declare function physics_particle_group_get_ang_vel(
  group: PhysicsParticleGroup
): number;
declare function physics_particle_group_get_x(
  group: PhysicsParticleGroup
): number;
declare function physics_particle_group_get_y(
  group: PhysicsParticleGroup
): number;
declare function physics_particle_group_get_angle(
  group: PhysicsParticleGroup
): number;
declare function physics_particle_set_group_flags(
  group: PhysicsParticleGroup,
  groupflags: PhysicsParticleGroupFlag
): void;
declare function physics_particle_get_group_flags(
  group: PhysicsParticleGroup
): PhysicsParticleGroupFlag;
declare function physics_particle_get_max_count(): Int;
declare function physics_particle_get_radius(): number;
declare function physics_particle_get_density(): number;
declare function physics_particle_get_damping(): number;
declare function physics_particle_get_gravity_scale(): number;
declare function physics_particle_set_max_count(count: Int): void;
declare function physics_particle_set_radius(radius: number): void;
declare function physics_particle_set_density(density: number): void;
declare function physics_particle_set_damping(damping: number): void;
declare function physics_particle_set_gravity_scale(scale: number): void;
declare function network_create_socket(type: NetworkType): NetworkSocket;
declare function network_create_socket_ext(
  type: NetworkType,
  port: Int
): NetworkSocket;
declare function network_create_server(
  type: NetworkType,
  port: Int,
  maxclients: Int
): NetworkServer;
declare function network_create_server_raw(
  type: NetworkType,
  port: Int,
  maxclients: Int
): NetworkServer;
declare function network_connect(
  socket: NetworkSocket,
  url: string,
  port: Int
): Int;
declare function network_connect_raw(
  socket: NetworkSocket,
  url: string,
  port: Int
): Int;
declare function network_connect_async(
  socket: NetworkSocket,
  url: string,
  port: Int
): Int;
declare function network_connect_raw_async(
  socket: NetworkSocket,
  url: string,
  port: Int
): Int;
declare function network_send_packet(
  socket: NetworkSocket,
  bufferid: Buffer,
  size: Int
): Int;
declare function network_send_raw(
  socket: NetworkSocket,
  bufferid: Buffer,
  size: Int
): Int;
declare function network_send_broadcast(
  socket: NetworkSocket,
  port: Int,
  bufferid: Buffer,
  size: Int
): Int;
declare function network_send_udp(
  socket: NetworkSocket,
  URL: string,
  port: Int,
  bufferid: Buffer,
  size: Int
): Int;
declare function network_send_udp_raw(
  socket: NetworkSocket,
  URL: string,
  port: Int,
  bufferid: Buffer,
  size: Int
): Int;
declare function network_set_timeout(
  socket: NetworkSocket,
  read: Int,
  write: Int
): void;
declare function network_set_config(
  parameter: NetworkConfig,
  value: NetworkSocket | Int | boolean
): void;
declare function network_resolve(url: string): string;
declare function network_destroy(socket: NetworkSocket | NetworkServer): void;
declare function buffer_create(
  size: Int,
  BufferKind: BufferKind,
  alignment: Int
): Buffer;
declare function buffer_write(
  buffer: Buffer,
  type: BufferType,
  value: BufferAutoType
): Int;
declare function buffer_read(buffer: Buffer, type: BufferType): BufferAutoType;
declare function buffer_seek(
  buffer: Buffer,
  base: BufferSeekBase,
  offset: Int
): void;
declare function buffer_delete(buffer: Buffer): void;
declare function buffer_exists(buffer: Buffer): boolean;
declare function buffer_get_type(buffer: Buffer): BufferKind;
declare function buffer_get_alignment(buffer: Buffer): Int;
declare function buffer_poke(
  buffer: Buffer,
  offset: Int,
  type: BufferType,
  value: BufferAutoType
): void;
declare function buffer_peek(
  buffer: Buffer,
  offset: Int,
  type: BufferType
): BufferAutoType;
declare function buffer_save(buffer: Buffer, filename: string): void;
declare function buffer_save_ext(
  buffer: Buffer,
  filename: string,
  offset: Int,
  size: Int
): void;
declare function buffer_load(filename: string): Buffer;
declare function buffer_load_ext(
  buffer: Buffer,
  filename: string,
  offset: Int
): void;
declare function buffer_load_partial(
  buffer: Buffer,
  filename: string,
  src_offset: Int,
  src_len: Int,
  dest_offset: Int
): void;
declare function buffer_copy(
  src_buffer: Buffer,
  src_offset: Int,
  size: Int,
  dest_buffer: Buffer,
  dest_offset: Int
): void;
declare function buffer_fill(
  buffer: Buffer,
  offset: Int,
  type: BufferType,
  value: BufferAutoType,
  size: Int
): void;
declare function buffer_get_size(buffer: Buffer): Int;
declare function buffer_tell(buffer: Buffer): Int;
declare function buffer_resize(buffer: Buffer, newsize: Int): void;
declare function buffer_md5(buffer: Buffer, offset: Int, size: Int): string;
declare function buffer_sha1(buffer: Buffer, offset: Int, size: Int): string;
declare function buffer_crc32(buffer: Buffer, offset: Int, size: Int): Int;
declare function buffer_base64_encode(
  buffer: Buffer,
  offset: Int,
  size: Int
): string;
declare function buffer_base64_decode(string: string): Buffer;
declare function buffer_base64_decode_ext(
  buffer: Buffer,
  string: string,
  offset: Int
): void;
declare function buffer_sizeof(type: BufferType): Int;
declare function buffer_get_address(buffer: Buffer): Pointer;
declare function buffer_create_from_vertex_buffer(
  VertexBuffer: VertexBuffer,
  kind: BufferKind,
  alignment: Int
): Buffer;
declare function buffer_create_from_vertex_buffer_ext(
  VertexBuffer: VertexBuffer,
  kind: BufferKind,
  alignment: Int,
  start_vertex: Int,
  num_vertices: Int
): Buffer;
declare function buffer_copy_from_vertex_buffer(
  VertexBuffer: VertexBuffer,
  start_vertex: Int,
  num_vertices: Int,
  dest_buffer: Buffer,
  dest_offset: Int
): void;
declare function buffer_async_group_begin(groupname: string): void;
declare function buffer_async_group_option(
  optionname: string,
  optionvalue: number | boolean | string
): void;
declare function buffer_async_group_end(): Int;
declare function buffer_load_async(
  bufferid: Buffer,
  filename: string,
  offset: Int,
  size: Int
): Int;
declare function buffer_save_async(
  bufferid: Buffer,
  filename: string,
  offset: Int,
  size: Int
): Int;
declare function buffer_compress(
  bufferid: Buffer,
  offset: Int,
  size: Int
): Buffer;
declare function buffer_decompress(bufferId: Buffer): Buffer;
declare function gml_release_mode(enable: boolean): void;
declare function gml_pragma(setting: string, ...parameters: string[]): void;
declare function steam_activate_overlay(overlayIndex: SteamOverlayPage): void;
declare function steam_is_overlay_enabled(): boolean;
declare function steam_is_overlay_activated(): boolean;
declare function steam_get_persona_name(): string;
declare function steam_initialised(): boolean;
declare function steam_is_cloud_enabled_for_app(): boolean;
declare function steam_is_cloud_enabled_for_account(): boolean;
declare function steam_file_persisted(filename: string): boolean;
declare function steam_get_quota_total(): Int;
declare function steam_get_quota_free(): Int;
declare function steam_file_write(
  steam_filename: string,
  data: string,
  size: Int
): Int;
declare function steam_file_write_file(
  steam_filename: string,
  local_filename: string
): Int;
declare function steam_file_read(filename: string): string;
declare function steam_file_delete(filename: string): Int;
declare function steam_file_exists(filename: string): boolean;
declare function steam_file_size(filename: string): Int;
declare function steam_file_share(filename: string): Int;
declare function steam_is_screenshot_requested(): boolean;
declare function steam_send_screenshot(
  filename: string,
  width: Int,
  height: Int
): Int;
declare function steam_is_user_logged_on(): boolean;
declare function steam_get_user_steam_id(): Int;
declare function steam_user_owns_dlc(dlc_id: Int): boolean;
declare function steam_user_installed_dlc(dlc_id: Int): boolean;
declare function steam_set_achievement(ach_name: string): void;
declare function steam_get_achievement(ach_name: string): boolean;
declare function steam_clear_achievement(ach_name: string): void;
declare function steam_set_stat_int(stat_name: string, value: Int): void;
declare function steam_set_stat_float(stat_name: string, value: number): void;
declare function steam_set_stat_avg_rate(
  stat_name: string,
  session_count: number,
  session_length: number
): void;
declare function steam_get_stat_int(stat_name: string): Int;
declare function steam_get_stat_float(stat_name: string): number;
declare function steam_get_stat_avg_rate(stat_name: string): number;
declare function steam_reset_all_stats(): void;
declare function steam_reset_all_stats_achievements(): void;
declare function steam_stats_ready(): boolean;
declare function steam_create_leaderboard(
  lb_name: string,
  sort_method: SteamLeaderboardSortType,
  display_type: SteamLeaderboardDisplayType
): Int;
declare function steam_upload_score(lb_name: string, score: number): Int;
declare function steam_upload_score_ext(
  lb_name: string,
  score: number,
  forceupdate: boolean
): Int;
declare function steam_download_scores_around_user(
  lb_name: string,
  range_start: Int,
  range_end: Int
): Int;
declare function steam_download_scores(
  lb_name: string,
  start_idx: Int,
  end_idx: Int
): Int;
declare function steam_download_friends_scores(lb_name: string): Int;
declare function steam_upload_score_buffer(
  lb_name: string,
  score: number,
  buffer_id: Buffer
): Int;
declare function steam_upload_score_buffer_ext(
  lb_name: string,
  score: number,
  buffer_id: number,
  forceupdate: boolean
): Int;
declare function steam_current_game_language(): string;
declare function steam_available_languages(): string;
declare function steam_activate_overlay_browser(url: string): void;
declare function steam_activate_overlay_user(
  dialog_name: string,
  steamid: SteamId
): void;
declare function steam_activate_overlay_store(app_id: Int): void;
declare function steam_get_user_persona_name(SteamId: SteamId): Int;
declare function steam_get_app_id(): Int;
declare function steam_get_user_account_id(): SteamId;
declare function steam_ugc_download(
  ugc_handle: SteamUgc,
  dest_filename: string
): Int;
declare function steam_ugc_create_item(
  consumer_app_id: Int,
  file_type: SteamUgcType
): Int;
declare function steam_ugc_start_item_update(
  consumer_app_id: Int,
  published_file_id: SteamUgc
): Int;
declare function steam_ugc_set_item_title(
  ugc_update_handle: SteamUgc,
  title: string
): boolean;
declare function steam_ugc_set_item_description(
  ugc_update_handle: SteamUgc,
  description: string
): boolean;
declare function steam_ugc_set_item_visibility(
  ugc_update_handle: SteamUgc,
  visibility: SteamUgcVisibility
): boolean;
declare function steam_ugc_set_item_tags(
  ugc_update_handle: SteamUgc,
  tag_array: string[]
): boolean;
declare function steam_ugc_set_item_content(
  ugc_update_handle: SteamUgc,
  directory: string
): boolean;
declare function steam_ugc_set_item_preview(
  ugc_update_handle: SteamUgc,
  image_path: string
): boolean;
declare function steam_ugc_submit_item_update(
  ugc_update_handle: SteamUgc,
  change_note: string
): Int;
declare function steam_ugc_get_item_update_progress(
  ugc_update_handle: SteamUgc,
  info_map: DsMap<string, any>
): boolean;
declare function steam_ugc_subscribe_item(published_file_id: SteamUgc): Int;
declare function steam_ugc_unsubscribe_item(published_file_id: SteamUgc): Int;
declare function steam_ugc_num_subscribed_items(): Int;
declare function steam_ugc_get_subscribed_items(
  item_list: DsList<SteamUgc>
): boolean;
declare function steam_ugc_get_item_install_info(
  published_file_id: SteamUgc,
  info_map: DsMap<string, any>
): boolean;
declare function steam_ugc_get_item_update_info(
  published_file_id: SteamUgc,
  info_map: DsMap<string, any>
): boolean;
declare function steam_ugc_request_item_details(
  published_file_id: SteamUgc,
  max_age_seconds: Int
): Int;
declare function steam_ugc_create_query_user(
  list_type: SteamUgcQueryListType,
  match_type: SteamUgcQueryMatchType,
  sort_order: SteamUgcQuerySortOrder,
  page: Int
): Int;
declare function steam_ugc_create_query_user_ex(
  list_type: SteamUgcQueryListType,
  match_type: SteamUgcQueryMatchType,
  sort_order: SteamUgcQuerySortOrder,
  page: Int,
  account_id: SteamId,
  creator_app_id: SteamId,
  consumer_app_id: Int
): Int;
declare function steam_ugc_create_query_all(
  query_type: SteamUgcQueryType,
  match_type: SteamUgcQueryMatchType,
  page: Int
): Int;
declare function steam_ugc_create_query_all_ex(
  query_type: SteamUgcQueryType,
  match_type: SteamUgcQueryMatchType,
  page: Int,
  creator_app_id: SteamId,
  consumer_app_id: Int
): Int;
declare function steam_ugc_query_set_cloud_filename_filter(
  ugc_query_handle: SteamUgcQuery,
  match_cloud_filename: boolean
): boolean;
declare function steam_ugc_query_set_match_any_tag(
  ugc_query_handle: SteamUgcQuery,
  match_any_tag: boolean
): boolean;
declare function steam_ugc_query_set_search_text(
  ugc_query_handle: SteamUgcQuery,
  search_text: string
): boolean;
declare function steam_ugc_query_set_ranked_by_trend_days(
  ugc_query: SteamUgcQuery,
  days: number
): boolean;
declare function steam_ugc_query_add_required_tag(
  ugc_query_handle: SteamUgcQuery,
  tag_name: string
): boolean;
declare function steam_ugc_query_add_excluded_tag(
  ugc_query_handle: SteamUgcQuery,
  tag_name: string
): boolean;
declare function steam_ugc_query_set_return_long_description(
  ugc_query_handle: SteamUgcQuery,
  return_long_desc: boolean
): boolean;
declare function steam_ugc_query_set_return_total_only(
  ugc_query_handle: SteamUgcQuery,
  return_total_only: boolean
): boolean;
declare function steam_ugc_query_set_allow_cached_response(
  ugc_query_handle: SteamUgcQuery,
  allow_cached_response: boolean
): boolean;
declare function steam_ugc_send_query(ugc_query_handle: SteamUgcQuery): Int;
declare function shader_set(shader: Shaders): void;
declare function shader_get_name(shader: Shaders): string;
declare function shader_reset(): void;
declare function shader_current(): Shaders;
declare function shader_is_compiled(shader: Shaders): boolean;
declare function shader_get_sampler_index(
  shader: Shaders,
  uniform_name: string
): ShaderSampler;
declare function shader_get_uniform(
  shader: Shaders,
  uniform_name: string
): ShaderUniform;
declare function shader_set_uniform_i(
  uniform_id: ShaderUniform,
  val1: Int,
  val2?: Int,
  val3?: Int,
  val4?: Int
): void;
declare function shader_set_uniform_i_array(
  uniform_id: ShaderUniform,
  array: Int[]
): void;
declare function shader_set_uniform_f(
  uniform_id: ShaderUniform,
  val1: number,
  val2?: number,
  val3?: number,
  val4?: number
): void;
declare function shader_set_uniform_f_array(
  uniform_id: ShaderUniform,
  array: number[]
): void;
declare function shader_set_uniform_matrix(uniform_id: ShaderUniform): void;
declare function shader_set_uniform_matrix_array(
  uniform_id: ShaderUniform,
  array: Int[]
): void;
declare function shader_enable_corner_id(enable: boolean): void;
declare function texture_set_stage(
  sampled_id: ShaderSampler,
  texture_id: Texture
): void;
declare function texture_get_texel_width(texture_id: Texture): Int;
declare function texture_get_texel_height(texture_id: Texture): Int;
declare function shaders_are_supported(): boolean;
declare function vertex_format_begin(): void;
declare function vertex_format_end(): VertexFormat;
declare function vertex_format_delete(format_id: VertexFormat): void;
declare function vertex_format_add_position(): void;
declare function vertex_format_add_position_3d(): void;
declare function vertex_format_add_colour(): void;
declare function vertex_format_add_color(): void;
declare function vertex_format_add_normal(): void;
declare function vertex_format_add_texcoord(): void;
declare function vertex_format_add_custom(
  type: VertexType,
  usage: VertexUsage
): void;
declare function vertex_create_buffer(): VertexBuffer;
declare function vertex_create_buffer_ext(size: Int): VertexBuffer;
declare function vertex_delete_buffer(vbuff: VertexBuffer): void;
declare function vertex_begin(vbuff: VertexBuffer, format: VertexFormat): void;
declare function vertex_end(vbuff: VertexBuffer): void;
declare function vertex_position(
  vbuff: VertexBuffer,
  x: number,
  y: number
): void;
declare function vertex_position_3d(
  vbuff: VertexBuffer,
  x: number,
  y: number,
  z: number
): void;
declare function vertex_colour(
  vbuff: VertexBuffer,
  colour: Int,
  alpha: number
): void;
declare function vertex_color(
  vbuff: VertexBuffer,
  color: Int,
  alpha: number
): void;
declare function vertex_argb(vbuff: VertexBuffer, argb: Int): void;
declare function vertex_texcoord(
  vbuff: VertexBuffer,
  u: number,
  v: number
): void;
declare function vertex_normal(
  vbuff: VertexBuffer,
  nx: number,
  ny: number,
  nz: number
): void;
declare function vertex_float1(vbuff: VertexBuffer, f1: number): void;
declare function vertex_float2(
  vbuff: VertexBuffer,
  f1: number,
  f2: number
): void;
declare function vertex_float3(
  vbuff: VertexBuffer,
  f1: number,
  f2: number,
  f3: number
): void;
declare function vertex_float4(
  vbuff: VertexBuffer,
  f1: number,
  f2: number,
  f3: number,
  f4: number
): void;
declare function vertex_ubyte4(
  vbuff: VertexBuffer,
  b1: Int,
  b2: Int,
  b3: Int,
  b4: Int
): void;
declare function vertex_submit(
  vbuff: VertexBuffer,
  prim: PrimitiveType,
  Texture: Texture
): void;
declare function vertex_freeze(vbuff: VertexBuffer): void;
declare function vertex_get_number(vbuff: VertexBuffer): Int;
declare function vertex_get_buffer_size(vbuff: VertexBuffer): Int;
declare function vertex_create_buffer_from_buffer(
  src_buffer: Buffer,
  format: VertexFormat
): VertexBuffer;
declare function vertex_create_buffer_from_buffer_ext(
  src_buffer: Buffer,
  format: VertexFormat,
  src_offset: Int,
  num_vertices: Int
): VertexBuffer;
declare function push_local_notification(
  fire_time: Datetime,
  title: string,
  message: string,
  data: string
): void;
declare function push_get_first_local_notification(
  ds_map: DsMap<string, string>
): Int;
declare function push_get_next_local_notification(
  ds_map: DsMap<string, string>
): Int;
declare function push_cancel_local_notification(id: Int): void;
declare function push_get_application_badge_number(): Int;
declare function push_set_application_badge_number(num: Int): void;
declare function skeleton_animation_set(anim_name: string): void;
declare function skeleton_animation_get(): string;
declare function skeleton_animation_mix(
  anim_from: string,
  anim_to: string,
  duration: number
): void;
declare function skeleton_animation_set_ext(
  anim_name: string,
  track: Int
): void;
declare function skeleton_animation_get_ext(track: Int): string;
declare function skeleton_animation_get_duration(anim_name: string): number;
declare function skeleton_animation_get_frames(anim_name: string): Int;
declare function skeleton_animation_clear(track: Int): void;
declare function skeleton_skin_set(skin_name: string): void;
declare function skeleton_skin_get(): string;
declare function skeleton_attachment_set(
  slot: string,
  attachment: string | Sprite
): any;
declare function skeleton_attachment_get(slot: string): string;
declare function skeleton_attachment_create(
  name: string,
  Sprite: Sprite,
  ind: Int,
  xo: number,
  yo: number,
  xs: number,
  ys: number,
  rot: number
): Int;
declare function skeleton_attachment_create_colour(
  name: string,
  Sprite: Sprite,
  ind: Int,
  xo: number,
  yo: number,
  xs: number,
  ys: number,
  rot: number,
  col: Int,
  alpha: number
): Int;
declare function skeleton_attachment_create_color(
  name: string,
  Sprite: Sprite,
  ind: Int,
  xo: number,
  yo: number,
  xs: number,
  ys: number,
  rot: number,
  col: Int,
  alpha: number
): Int;
declare function skeleton_collision_draw_set(val: boolean): void;
declare function skeleton_bone_data_get(
  bone: string,
  map: DsMap<string, any>
): void;
declare function skeleton_bone_data_set(
  bone: string,
  map: DsMap<string, any>
): void;
declare function skeleton_bone_state_get(
  bone: string,
  map: DsMap<string, any>
): void;
declare function skeleton_bone_state_set(
  bone: string,
  map: DsMap<string, any>
): void;
declare function skeleton_slot_colour_set(
  slot: string,
  col: Int,
  alpha: number
): void;
declare function skeleton_slot_color_set(
  slot: string,
  col: Int,
  alpha: number
): void;
declare function skeleton_slot_colour_get(slot: string): Int;
declare function skeleton_slot_color_get(slot: string): Int;
declare function skeleton_slot_alpha_get(slot: string): number;
declare function skeleton_find_slot(
  x: number,
  y: number,
  list: DsList<string>
): void;
declare function skeleton_get_minmax(): number[];
declare function skeleton_get_num_bounds(): Int;
declare function skeleton_get_bounds(index: Int): number[];
declare function skeleton_animation_get_frame(track: Int): Int;
declare function skeleton_animation_set_frame(track: Int, index: Int): void;
declare function skeleton_animation_get_event_frames(
  anim_name: string,
  event_name: string
): Int[];
declare function draw_skeleton(
  Sprite: Sprite,
  animname: string,
  skinname: string,
  frame: Int,
  x: number,
  y: number,
  xscale: number,
  yscale: number,
  rot: number,
  col: Int,
  alpha: number
): void;
declare function draw_skeleton_time(
  Sprite: Sprite,
  animname: string,
  skinname: string,
  time: number,
  x: number,
  y: number,
  xscale: number,
  yscale: number,
  rot: number,
  col: Int,
  alpha: number
): void;
declare function draw_skeleton_instance<T extends any>(
  instance: T,
  animname: string,
  skinname: string,
  frame: Int,
  x: number,
  y: number,
  xscale: number,
  yscale: number,
  rot: number,
  col: Int,
  alpha: number
): void;
declare function draw_skeleton_collision(
  Sprite: Sprite,
  animname: string,
  frame: Int,
  x: number,
  y: number,
  xscale: number,
  yscale: number,
  rot: number,
  col: Int
): void;
declare function draw_enable_skeleton_blendmodes(enable: boolean): void;
declare function draw_get_enable_skeleton_blendmodes(): boolean;
declare function skeleton_animation_list(
  Sprite: Sprite,
  list: DsList<string>
): void;
declare function skeleton_skin_list(Sprite: Sprite, list: DsList<string>): void;
declare function skeleton_bone_list(Sprite: Sprite, list: DsList<string>): void;
declare function skeleton_slot_list(Sprite: Sprite, list: DsList<string>): void;
declare function skeleton_slot_data(
  Sprite: Sprite,
  list: DsList<DsMap<string, any>>
): void;
declare function skeleton_slot_data_instance(
  list: DsList<DsMap<string, any>>
): any;
////#endregion
